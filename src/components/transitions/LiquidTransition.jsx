import { useEffect, useRef, useCallback } from 'react';

const VERT_SHADER = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAG_SHADER = `
  precision mediump float;
  varying vec2 v_uv;
  uniform float u_progress;
  uniform float u_time;
  uniform vec2 u_resolution;

  // Simplex-like noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                   + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                            dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = v_uv;
    float t = u_time * 0.8;

    // Liquid distortion using layered noise
    float n1 = snoise(uv * 3.0 + vec2(t * 0.3, t * 0.2));
    float n2 = snoise(uv * 6.0 - vec2(t * 0.2, t * 0.4));
    float n3 = snoise(uv * 12.0 + vec2(t * 0.5, -t * 0.3));

    float noise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;

    // Wave-like transition threshold
    float wave = u_progress + noise * 0.35;
    float edge = smoothstep(0.0, 0.08, wave - uv.x);

    // Color palette: void black -> acid green -> electric purple
    vec3 col1 = vec3(0.051, 0.0, 0.063);   // void
    vec3 col2 = vec3(0.8, 1.0, 0.0);        // acid green
    vec3 col3 = vec3(0.482, 0.0, 1.0);      // electric purple

    float t2 = smoothstep(0.0, 0.5, wave);
    float t3 = smoothstep(0.5, 1.0, wave);
    vec3 color = mix(col1, col2, t2);
    color = mix(color, col3, t3);

    // Scanline effect
    float scanline = sin(uv.y * u_resolution.y * 0.5) * 0.04;
    color += scanline;

    // Chromatic aberration at edge
    float aberration = smoothstep(0.0, 0.12, abs(wave - uv.x - 0.04)) * 0.0;
    color.r += aberration;
    color.b -= aberration;

    gl_FragColor = vec4(color, edge);
  }
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl, vertSrc, fragSrc) {
  const vert = createShader(gl, gl.VERTEX_SHADER, vertSrc);
  const frag = createShader(gl, gl.FRAGMENT_SHADER, fragSrc);
  if (!vert || !frag) return null;
  const program = gl.createProgram();
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    return null;
  }
  return program;
}

export function useLiquidTransition() {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const progressRef = useRef(0);
  const directionRef = useRef(1); // 1 = in, -1 = out
  const resolveRef = useRef(null);

  const initGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return false;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
    if (!gl) return false;

    const program = createProgram(gl, VERT_SHADER, FRAG_SHADER);
    if (!program) return false;

    const positions = new Float32Array([-1,-1, 1,-1, -1,1, 1,1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    gl.useProgram(program);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    glRef.current = gl;
    programRef.current = program;
    return true;
  }, []);

  const render = useCallback((timestamp) => {
    const gl = glRef.current;
    const program = programRef.current;
    const canvas = canvasRef.current;
    if (!gl || !program || !canvas) return;

    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = (timestamp - startTimeRef.current) / 1000;

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.uniform1f(gl.getUniformLocation(program, 'u_progress'), progressRef.current);
    gl.uniform1f(gl.getUniformLocation(program, 'u_time'), elapsed);
    gl.uniform2f(gl.getUniformLocation(program, 'u_resolution'), canvas.width, canvas.height);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }, []);

  const animate = useCallback((timestamp, duration, from, to, onComplete) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const t = Math.min(elapsed / duration, 1);
    // Ease in-out cubic
    const eased = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
    progressRef.current = from + (to - from) * eased;

    render(timestamp);

    if (t < 1) {
      rafRef.current = requestAnimationFrame((ts) => animate(ts, duration, from, to, onComplete));
    } else {
      progressRef.current = to;
      onComplete?.();
    }
  }, [render]);

  const triggerTransition = useCallback((onMidpoint) => {
    return new Promise((resolve) => {
      const canvas = canvasRef.current;
      if (!canvas) { onMidpoint?.(); resolve(); return; }

      if (!glRef.current) {
        if (!initGL()) { onMidpoint?.(); resolve(); return; }
      }

      canvas.style.opacity = '1';
      canvas.style.pointerEvents = 'all';
      startTimeRef.current = null;
      progressRef.current = 0;

      // Phase 1: sweep in (0 → 1.2)
      rafRef.current = requestAnimationFrame((ts) => {
        startTimeRef.current = ts;
        animate(ts, 700, 0, 1.2, () => {
          onMidpoint?.();
          // Phase 2: sweep out (1.2 → 2.4)
          startTimeRef.current = null;
          rafRef.current = requestAnimationFrame((ts2) => {
            startTimeRef.current = ts2;
            animate(ts2, 700, 1.2, 2.4, () => {
              canvas.style.opacity = '0';
              canvas.style.pointerEvents = 'none';
              resolve();
            });
          });
        });
      });
    });
  }, [initGL, animate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    initGL();

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [initGL]);

  return { canvasRef, triggerTransition };
}

export default function LiquidTransitionCanvas({ canvasRef }) {
  return (
    <canvas
      ref={canvasRef}
      id="transition-canvas"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity 0.1s',
      }}
    />
  );
}
