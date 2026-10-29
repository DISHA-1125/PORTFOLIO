/**
 * 3D INTERACTIVE HERO BACKGROUND
 * Powered by Three.js with automatic Canvas Particle Fallback
 * Incorporates the confirmed 4-color palette:
 * Deep Burgundy (#561C24), Wine (#6D2932), Warm Taupe (#C7B7A3), Cream (#E8D8C4)
 */

class InteractiveHeroBackground {
  constructor(containerId = 'hero-canvas-container') {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isMobile = window.innerWidth < 768;

    this.init();
  }

  init() {
    if (window.THREE && this.supportsWebGL()) {
      this.initThree();
    } else {
      this.initCanvasFallback();
    }

    this.bindEvents();
  }

  supportsWebGL() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  initThree() {
    const THREE = window.THREE;
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    // Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    this.camera.position.z = 24;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xC7B7A3, 2.2, 50);
    pointLight1.position.set(10, 15, 15);
    this.scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x6D2932, 2.5, 50);
    pointLight2.position.set(-15, -10, 10);
    this.scene.add(pointLight2);

    // Color definitions
    this.palette = {
      burgundy: 0x561C24,
      wine: 0x6D2932,
      taupe: 0xC7B7A3,
      cream: 0xE8D8C4
    };

    // Create Floating Geometric Objects
    this.objectsGroup = new THREE.Group();
    this.floatingObjects = [];

    const geomCount = this.isMobile ? 12 : 22;
    const geometries = [
      new THREE.IcosahedronGeometry(1.2, 0),
      new THREE.TorusGeometry(1.1, 0.35, 12, 24),
      new THREE.OctahedronGeometry(1.3, 0),
      new THREE.TetrahedronGeometry(1.4, 0),
      new THREE.DodecahedronGeometry(1.0, 0)
    ];

    const colors = [this.palette.wine, this.palette.taupe, this.palette.cream, this.palette.burgundy];

    for (let i = 0; i < geomCount; i++) {
      const geom = geometries[i % geometries.length];
      const color = colors[i % colors.length];

      const material = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.35,
        metalness: 0.25,
        wireframe: i % 4 === 0, // stylish wireframe accents
        transparent: true,
        opacity: i % 4 === 0 ? 0.65 : 0.85
      });

      const mesh = new THREE.Mesh(geom, material);

      // Distribute in a spherical orbit
      const radius = 9 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.9;

      mesh.position.set(
        radius * Math.cos(theta) * Math.cos(phi),
        radius * Math.sin(phi),
        (Math.random() - 0.5) * 12 - 2
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.5 + Math.random() * 0.8;
      mesh.scale.set(scale, scale, scale);

      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.018,
        floatSpeed: 0.001 + Math.random() * 0.002,
        initialY: mesh.position.y,
        floatOffset: Math.random() * Math.PI * 2
      };

      this.floatingObjects.push(mesh);
      this.objectsGroup.add(mesh);
    }

    // Connective particles field (neural network aesthetic)
    const particleCount = this.isMobile ? 50 : 120;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 45;
      particlePositions[i + 1] = (Math.random() - 0.5) * 35;
      particlePositions[i + 2] = (Math.random() - 0.5) * 20;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: this.palette.taupe,
      size: this.isMobile ? 0.18 : 0.25,
      transparent: true,
      opacity: 0.55
    });

    this.particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    this.scene.add(this.particleSystem);
    this.scene.add(this.objectsGroup);

    this.animateThree();
  }

  animateThree() {
    this.animationFrameId = requestAnimationFrame(() => this.animateThree());

    if (this.isReducedMotion) {
      this.renderer.render(this.scene, this.camera);
      return;
    }

    const time = Date.now();

    // Smooth mouse interpolation
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // Subtly rotate groups based on mouse and time
    this.objectsGroup.rotation.y = this.mouse.x * 0.4 + time * 0.00015;
    this.objectsGroup.rotation.x = -this.mouse.y * 0.25;

    this.particleSystem.rotation.y = -time * 0.00008;

    // Animate each floating object individually
    this.floatingObjects.forEach((mesh) => {
      mesh.rotation.x += mesh.userData.rotSpeedX;
      mesh.rotation.y += mesh.userData.rotSpeedY;
      mesh.position.y = mesh.userData.initialY + Math.sin(time * mesh.userData.floatSpeed + mesh.userData.floatOffset) * 0.7;
    });

    this.renderer.render(this.scene, this.camera);
  }

  initCanvasFallback() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);

    this.resizeCanvas();
    this.initCanvasNodes();
    this.animateCanvas();
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = this.container.clientWidth || window.innerWidth;
    this.canvas.height = this.container.clientHeight || window.innerHeight;
  }

  initCanvasNodes() {
    const count = this.isMobile ? 25 : 55;
    this.nodes = [];
    const colors = ['#C7B7A3', '#6D2932', '#561C24', '#E8D8C4'];

    for (let i = 0; i < count; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: 2 + Math.random() * 3.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.3 + Math.random() * 0.5
      });
    }
  }

  animateCanvas() {
    this.animationFrameId = requestAnimationFrame(() => this.animateCanvas());

    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const maxDist = this.isMobile ? 75 : 120;

    // Draw connecting lines
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const dx = this.nodes[i].x - this.nodes[j].x;
        const dy = this.nodes[i].y - this.nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(199, 183, 163, ${0.25 * (1 - dist / maxDist)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
          ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw and update nodes
    for (const node of this.nodes) {
      if (!this.isReducedMotion) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.globalAlpha = node.alpha;
      ctx.fill();
      ctx.globalAlpha = 1.0;
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
      const width = this.container.clientWidth || window.innerWidth;
      const height = this.container.clientHeight || window.innerHeight;

      if (this.renderer && this.camera) {
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
      } else if (this.canvas) {
        this.resizeCanvas();
        this.initCanvasNodes();
      }
    });

    window.addEventListener('mousemove', (e) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.mouse.targetX = (e.clientX / width) * 2 - 1;
      this.mouse.targetY = -(e.clientY / height) * 2 + 1;
    });

    // Touch device support: gyro/tilt emulation
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (e) => {
        if (e.gamma !== null && e.beta !== null) {
          this.mouse.targetX = Math.min(Math.max(e.gamma / 30, -1), 1);
          this.mouse.targetY = Math.min(Math.max((e.beta - 45) / 30, -1), 1);
        }
      });
    }
  }

  updateThemeColors(isDark) {
    if (!this.floatingObjects) return;
    // Adapt material brightness based on theme
    this.floatingObjects.forEach((mesh, idx) => {
      if (mesh.material) {
        mesh.material.opacity = isDark ? 0.8 : 0.65;
      }
    });
  }
}

window.InteractiveHeroBackground = InteractiveHeroBackground;

