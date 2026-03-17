export type Language = 'en' | 'es';

export interface Translation {
  nav: {
    services: string;
    work: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      visual3D: { title: string; desc: string; details: string[]; image?: string; images?: string[] };
      games: { title: string; desc: string; details: string[]; image?: string; images?: string[] };
      web: { title: string; desc: string; details: string[]; image?: string; images?: string[] };
      generativeArt: { title: string; desc: string; details: string[]; image?: string; images?: string[] };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
    error: string;
    sending: string;
  };
  about: {
    title: string;
    historyTitle: string;
    historyText: string;
    visionTitle: string;
    visionText: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      services: 'Services',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      badge: 'New Era of Design',
      title: 'Crafting Immersive Digital Realities',
      subtitle: 'We blend high-end design with cutting-edge technology to create digital products that captivate and drive growth.',
      cta: 'Start a Project',
    },
    services: {
      title: 'Our Expertise',
      subtitle: 'Tailored solutions for modern brands and creators.',
      items: {
        visual3D: {
          title: '3D & Graphic Design',
          desc: 'Comprehensive visual storytelling blending high-impact graphics with stunning 3D modeling.',
          image: 'img/graphic_design_3d.jpg',
          details: [
            "Our design ecosystem bridges the gap between 2D and 3D. We use Blender as our primary engine for both high-fidelity 3D modeling and advanced compositing, running natively on optimized Linux workstations for maximum performance.",
            "By integrating Inkscape for vector precision and Cycles for photorealistic rendering, we create unified brand identities that exist in both flat and spatial dimensions. Our workflow is 100% open-source, ensuring flexibility and no vendor lock-in for our clients' digital assets."
          ]
        },
        games: {
          title: 'Video Games Assets',
          desc: 'High-quality 2D/3D assets, characters, and environments for game developers.',
          image: 'img/game_assets.jpg',
          details: [
            "We develop assets optimized for the Godot Engine, the leading open-source game engine. Our experience includes creating native Linux builds and ensuring cross-platform compatibility through open standards like GLTF and OpenXR.",
            "Our technical artists use specialized tools like Material Maker and Pixelorama, all running on a rock-solid Linux environment. We focus on performance and modularity, providing assets that are ready to be integrated into any open-source or proprietary game framework."
          ]
        },
        web: {
          title: 'Web Development',
          desc: 'Future-proof web applications built with speed, scalability, and UX in mind.',
          image: 'img/web_dev.jpg',
          details: [
            "Our web solutions are deployed on enterprise-grade Linux servers using Docker and Kubernetes for orchestration. We specialize in the LAMP and MERN stacks, always prioritizing open-source technologies to avoid vendor lock-in.",
            "Security and speed are our priorities, which is why we use Nginx and Apache as our primary web servers. Our development environment is 100% Linux-based, allowing us to replicate production environments exactly and ensure seamless deployments."
          ]
        },
        generativeArt: {
          title: 'Generative AI Neural Architectures',
          desc: 'Harnessing the power of neural networks to create unique, high-fidelity digital art.',
          image: 'img/neural_arquitecture_2k.jpg',
          images: [
            'img/647426455_929914782834872_1174754262020917536_n.jpg',
            'img/647583732_930064159486601_7840882198085153514_n.jpg',
            'img/648961035_930686886090995_6031479562057640656_n.jpg'
          ],
          details: [
            "We utilize state-of-the-art models like Stable Diffusion and Midjourney, fine-tuned on high-performance Linux clusters. By understanding the underlying latent space, we can manipulate specific artistic styles, lighting, and compositions to create visuals that were previously impossible to achieve manually in such short timeframes."
          ]
        },
      },
    },
    contact: {
      title: "Let's Build Something Great",
      subtitle: 'Have a project in mind? We would love to hear from you.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully! We will get back to you soon.',
      error: 'Oops! Something went wrong. Please try again.',
      sending: 'Sending...',
    },
    about: {
      title: 'Our Story',
      historyTitle: 'The Beginning',
      historyText: 'I graduated from UTU as an advertising professional, but it was graphic design that led me into the world of computing. From there, a long self-taught journey began, opening doors to many different areas: web development, 3D design, Linux system administration… and a long list of other tools and disciplines I have incorporated along the way.',
      visionTitle: 'The Future',
      visionText: 'Our vision is to blur the lines between reality and digital art, creating worlds that inspire and technologies that empower the next generation of creators.',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      work: 'Trabajo',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Nueva Era del Diseño',
      title: 'Creando Realidades Digitales Inmersivas',
      subtitle: 'Combinamos diseño de alta gama con tecnología de punta para crear productos digitales que cautivan e impulsan el crecimiento.',
      cta: 'Iniciar Proyecto',
    },
    services: {
      title: 'Nuestra Experiencia',
      subtitle: 'Soluciones a medida para marcas y creadores modernos.',
      items: {
        visual3D: {
          title: 'Diseño Gráfico y 3D',
          desc: 'Narrativa visual integral que combina gráficos de alto impacto con modelado 3D impresionante.',
          image: 'img/graphic_design_3d.jpg',
          details: [
            "Nuestro ecosistema de diseño cierra la brecha entre el 2D y el 3D. Utilizamos Blender como nuestro motor principal tanto para el modelado 3D de alta fidelidad como para la composición avanzada, ejecutándose de forma nativa en estaciones de trabajo Linux optimizadas para el máximo rendimiento.",
            "Al integrar Inkscape para la precisión vectorial y Cycles para el renderizado fotorrealista, creamos identidades de marca unificadas que existen tanto en dimensiones planas como espaciales. Nuestro flujo de trabajo es 100% de código abierto, garantizando flexibilidad y sin dependencia de proveedores para los activos digitales de nuestros clientes."
          ]
        },
        games: {
          title: 'Assets para Videojuegos',
          desc: 'Activos 2D/3D de alta calidad, personajes y entornos para desarrolladores de juegos.',
          image: 'img/game_assets.jpg',
          details: [
            "Desarrollamos activos optimizados para Godot Engine, el motor de juegos de código abierto líder. Nuestra experiencia incluye la creación de compilaciones nativas para Linux y la garantía de compatibilidad multiplataforma a través de estándares abiertos como GLTF y OpenXR.",
            "Nuestros artistas técnicos utilizan herramientas especializadas como Material Maker y Pixelorama, todas ejecutándose en un entorno Linux sólido como una roca. Nos enfocamos en el rendimiento y la modularidad, proporcionando activos que están listos para ser integrados en cualquier framework de juegos de código abierto o propietario."
          ]
        },
        web: {
          title: 'Desarrollo Web',
          desc: 'Aplicaciones web preparadas para el futuro, creadas pensando en la velocidad, escalabilidad y UX.',
          image: 'img/web_dev.jpg',
          details: [
            "Nuestras soluciones web se despliegan en servidores Linux de grado empresarial utilizando Docker y Kubernetes para la orquestación. Nos especializamos en los stacks LAMP y MERN, priorizando siempre las tecnologías de código abierto para evitar el bloqueo del proveedor.",
            "La seguridad y la velocidad son nuestras prioridades, por lo que utilizamos Nginx y Apache como nuestros servidores web principales. Nuestro entorno de desarrollo es 100% basado en Linux, lo que nos permite replicar los entornos de producción exactamente y garantizar despliegues sin problemas."
          ]
        },
        generativeArt: {
          title: 'Arquitecturas Neuronales de IA Generativa',
          desc: 'Aprovechando el poder de las redes neuronales para crear arte digital único y de alta fidelidad.',
          image: 'img/neural_arquitecture_2k.jpg',
          images: [
            'img/647426455_929914782834872_1174754262020917536_n.jpg',
            'img/647583732_930064159486601_7840882198085153514_n.jpg',
            'img/648961035_930686886090995_6031479562057640656_n.jpg'
          ],
          details: [
            "Utilizamos modelos de vanguardia como Stable Diffusion y Midjourney, ajustados en clústeres Linux de alto rendimiento. Al comprender el espacio latente subyacente, podemos manipular estilos artísticos específicos, iluminación y composiciones para crear visuales que antes eran imposibles de lograr manualmente en plazos tan cortos."
          ]
        },
      },
    },
    contact: {
      title: 'Construyamos Algo Grande',
      subtitle: '¿Tienes un proyecto en mente? Nos encantaría saber de ti.',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      success: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
      error: '¡Ups! Algo salió mal. Por favor, inténtalo de nuevo.',
      sending: 'Enviando...',
    },
    about: {
      title: 'Nuestra Historia',
      historyTitle: 'El Comienzo',
      historyText: 'Egresé de la UTU como publicista, pero fue el diseño gráfico lo que me llevó a adentrarme en el mundo de la informática. A partir de ahí comenzó un largo recorrido autodidacta que me fue abriendo distintas puertas: desarrollo web, diseño 3D, administración de sistemas Linux… y un largo etcétera de herramientas y disciplinas que fui incorporando con el tiempo.',
      visionTitle: 'El Futuro',
      visionText: 'Nuestra visión es borrar las líneas entre la realidad y el arte digital, creando mundos que inspiren y tecnologías que empoderen a la próxima generación de creadores.',
    },
  },
};
