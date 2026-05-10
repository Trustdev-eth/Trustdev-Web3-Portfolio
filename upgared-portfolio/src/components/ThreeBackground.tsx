import { Suspense, useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { RootState } from '@react-three/fiber';
import { Float, Grid, Sparkles, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ACID = '#2dd4bf';
const MIST = '#a7f3d0';
const PLASMA = '#e879f9';
const INK = '#050508';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

type MouseParallaxRef = {
  tx: number;
  ty: number;
  sx: number;
  sy: number;
};

function CameraRig({
  mouse,
  strength,
}: {
  mouse: MutableRefObject<MouseParallaxRef>;
  strength: number;
}) {
  const baseZ = 15;

  useFrame((state: RootState) => {
    const m = mouse.current;
    const k = 0.085;
    m.sx = THREE.MathUtils.lerp(m.sx, m.tx, k);
    m.sy = THREE.MathUtils.lerp(m.sy, m.ty, k);

    const cam = state.camera;
    const cx = m.sx * 1.05 * strength;
    const cy = m.sy * 0.78 * strength;
    const cz = baseZ - m.sy * 0.52 * strength + Math.abs(m.sx) * 0.12 * strength;
    cam.position.set(cx, cy, cz);
    cam.lookAt(m.sx * -0.35, m.sy * -0.25, 0);
  });

  return null;
}

function Constellation({ nodeCount = 72 }: { nodeCount?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const { pointsGeom, linesGeom } = useMemo(() => {
    const positions = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 13;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 11;
    }

    const maxD = 3.35;
    const maxSq = maxD * maxD;
    const segments: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const ix = i * 3;
      for (let j = i + 1; j < nodeCount; j++) {
        const jx = j * 3;
        const dx = positions[ix] - positions[jx];
        const dy = positions[ix + 1] - positions[jx + 1];
        const dz = positions[ix + 2] - positions[jx + 2];
        if (dx * dx + dy * dy + dz * dz < maxSq) {
          segments.push(
            positions[ix],
            positions[ix + 1],
            positions[ix + 2],
            positions[jx],
            positions[jx + 1],
            positions[jx + 2],
          );
        }
      }
    }

    const pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(segments), 3));
    return { pointsGeom: pg, linesGeom: lg };
  }, [nodeCount]);

  useFrame((state: RootState) => {
    const g = groupRef.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    g.rotation.y = t * 0.03;
    g.rotation.x = Math.sin(t * 0.062) * 0.052;
    const pulse = 1 + Math.sin(t * 1.1) * 0.012;
    g.scale.setScalar(pulse);
  });

  return (
    <Float
      speed={1.35}
      rotationIntensity={0.22}
      floatIntensity={0.55}
      floatingRange={[-0.35, 0.35]}
    >
      <group ref={groupRef}>
        <points geometry={pointsGeom}>
          <pointsMaterial
            color={MIST}
            size={0.09}
            transparent
            opacity={0.95}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </points>
        <lineSegments geometry={linesGeom}>
          <lineBasicMaterial
            color={ACID}
            transparent
            opacity={0.42}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </lineSegments>
      </group>
    </Float>
  );
}

function OrbitAccent() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state: RootState) => {
    const g = ref.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    g.rotation.z = t * 0.016;
    g.rotation.x = 0.82 + Math.sin(t * 0.038) * 0.05;
  });
  return (
    <group ref={ref} position={[2.4, -0.6, -1.5]}>
      <mesh rotation={[0.2, 0.4, 0]}>
        <torusGeometry args={[5.6, 0.014, 10, 140]} />
        <meshBasicMaterial
          color={PLASMA}
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <mesh rotation={[0.2, 0.4, 0]} scale={1.04}>
        <torusGeometry args={[5.6, 0.045, 10, 80]} />
        <meshBasicMaterial
          color={ACID}
          transparent
          opacity={0.06}
          wireframe
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function SceneBackdrop({ lowPower }: { lowPower: boolean }) {
  if (lowPower) {
    return (
      <Grid
        args={[100, 100]}
        infiniteGrid
        fadeDistance={28}
        fadeStrength={1.15}
        cellSize={0.65}
        sectionSize={3.6}
        cellThickness={0.55}
        sectionThickness={0.95}
        sectionColor="#701a75"
        cellColor="#0f766e"
        position={[0, -7.5, -5]}
        rotation={[-Math.PI / 2.35, 0, 0]}
      />
    );
  }

  return (
    <>
      <Grid
        args={[120, 120]}
        infiniteGrid
        fadeDistance={42}
        fadeStrength={1.25}
        cellSize={0.5}
        sectionSize={3.2}
        cellThickness={0.65}
        sectionThickness={1.05}
        sectionColor="#86198f"
        cellColor="#0d9488"
        position={[0, -7.8, -5.5]}
        rotation={[-Math.PI / 2.42, 0, 0.05]}
      />
      <Sparkles
        count={70}
        scale={[26, 14, 12]}
        size={2.4}
        speed={0.4}
        opacity={0.55}
        color={ACID}
      />
      <Sparkles
        count={38}
        scale={[20, 10, 14]}
        size={1.8}
        speed={0.28}
        opacity={0.35}
        color={PLASMA}
      />
    </>
  );
}

function Scene({
  lowPower,
  mouse,
}: {
  lowPower: boolean;
  mouse: MutableRefObject<MouseParallaxRef>;
}) {
  const strength = lowPower ? 0.52 : 1;

  return (
    <>
      <CameraRig mouse={mouse} strength={strength} />
      <fog attach="fog" args={[INK, 12, 52]} />

      <ambientLight intensity={0.12} />
      <pointLight position={[10, 8, 12]} intensity={0.55} color={ACID} distance={56} decay={2} />
      <pointLight position={[-12, -5, 10]} intensity={0.4} color={PLASMA} distance={48} decay={2} />
      <pointLight position={[0, -4, 18]} intensity={0.18} color="#f8fafc" distance={40} decay={2} />

      <SceneBackdrop lowPower={lowPower} />

      <Constellation nodeCount={lowPower ? 48 : 76} />

      {!lowPower && (
        <>
          <OrbitAccent />
          <Stars
            radius={92}
            depth={44}
            count={720}
            factor={2.55}
            saturation={0}
            fade
            speed={0.32}
          />
        </>
      )}
    </>
  );
}

function configureRenderer(gl: THREE.WebGLRenderer) {
  gl.setClearColor(0x000000, 0);
  gl.toneMapping = THREE.ACESFilmicToneMapping;
  gl.toneMappingExposure = 1.08;
  gl.outputColorSpace = THREE.SRGBColorSpace;
}

export function ThreeBackground() {
  const reducedMotion = usePrefersReducedMotion();
  const [lowPower, setLowPower] = useState(false);
  const mouseParallax = useRef<MouseParallaxRef>({ tx: 0, ty: 0, sx: 0, sy: 0 });

  useEffect(() => {
    const coarse = window.matchMedia('(max-width: 640px)').matches;
    const lite = 'connection' in navigator && (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    setLowPower(Boolean(coarse || lite));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      const m = mouseParallax.current;
      m.tx = (e.clientX / w) * 2 - 1;
      m.ty = -((e.clientY / h) * 2 - 1);
    };

    const reset = () => {
      const m = mouseParallax.current;
      m.tx = 0;
      m.ty = 0;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', reset);
      window.removeEventListener('blur', reset);
    };
  }, []);

  if (reducedMotion) {
    return null;
  }

  return (
    <div
      className="three-bg-mask pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.72] mix-blend-screen sm:opacity-[0.78] md:opacity-[0.84]"
      aria-hidden
    >
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 15], fov: 48 }}
          gl={{
            alpha: true,
            antialias: !lowPower,
            powerPreference: lowPower ? 'low-power' : 'high-performance',
          }}
          dpr={lowPower ? [1, 1] : [1, Math.min(window.devicePixelRatio, 1.85)]}
          onCreated={({ gl }) => configureRenderer(gl)}
        >
          <Scene lowPower={lowPower} mouse={mouseParallax} />
        </Canvas>
      </Suspense>
    </div>
  );
}
