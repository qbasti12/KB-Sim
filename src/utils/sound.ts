// Web Audio API synthesized mechanical keyboard sound generator
// Zero external audio assets needed, 100% offline & fast!

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playKeySound(isSpace: boolean = false, switchType: string = 'cherry-red') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Bottom-out mechanical thock (low-mid resonance)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const baseFreq = isSpace ? 140 : switchType === 'cherry-blue' ? 320 : 220;
    osc.type = isSpace ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(baseFreq * (0.95 + Math.random() * 0.1), now);
    osc.frequency.exponentialRampToValueAtTime(isSpace ? 45 : 70, now + 0.08);

    gain.gain.setValueAtTime(isSpace ? 0.35 : 0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (isSpace ? 0.12 : 0.07));

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + (isSpace ? 0.13 : 0.08));

    // 2. Plastic click / transient noise (snappy switch stem impact)
    const bufferSize = ctx.sampleRate * 0.03; // 30ms noise
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = switchType === 'cherry-blue' ? 'highpass' : 'bandpass';
    filter.frequency.value = switchType === 'cherry-blue' ? 3200 : isSpace ? 1200 : 2100;
    filter.Q.value = switchType === 'cherry-blue' ? 4.0 : 2.0;

    const noiseGain = ctx.createGain();
    const clickVolume = switchType === 'cherry-blue' ? 0.28 : isSpace ? 0.18 : 0.14;
    noiseGain.gain.setValueAtTime(clickVolume, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    whiteNoise.start(now);
    whiteNoise.stop(now + 0.03);
  } catch {
    // Audio might be blocked by autoplay policy before user gesture
  }
}
