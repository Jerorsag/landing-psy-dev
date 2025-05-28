# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

# Landing Page - Carolina Trujillo | Psicóloga Cuántica

## 🌟 Objetivo Central del Sitio

Diseñar una **landing page emocional y visualmente atractiva**, sin scroll excesivo, cuyo propósito principal es **captar leads a través de un formulario**, dejando sembrada la semilla de **transformación y conexión espiritual**.  
El enfoque está alineado con un discurso **cuántico** y de **coaching espiritual**, buscando un impacto emocional que guíe al visitante a una acción clara.

---

## 📌 Resumen Profesional del Proyecto

**Landing Page Carolina Trujillo - Psicóloga Cuántica**

Se desarrollará una **landing page de una sola vista** que transmita una imagen **cálida, profesional y mágica**.  
Su objetivo principal es **generar leads** mediante un formulario, creando una experiencia **emocional e intuitiva**.

Se incluirán:
- Beneficios de sus **sesiones psico-cuánticas**.
- **Testimonios reales** en formato visual atractivo.
- Sección de **preguntas frecuentes**.
- Diseño con **colores suaves**, **acentos místicos** y **CTA claros**.
- Automatizaciones para notificaciones en tiempo real sobre nuevos registros, optimizando la gestión de prospectos.

---

## 🧭 Secciones Propuestas

Estas son las secciones propuestas para una estructura **scroll única**, ordenadas estratégicamente:

### 1. **Header con CTA (Hero)**
- Frase destacada: _"Tu salto cuántico comienza aquí 🌌"_
- Subtítulo: _"Psicóloga cuántica y coach de propósito de vida"_
- Botón CTA: “Agenda tu sesión” o “Transforma tu vida hoy” (ancla al formulario)

### 2. **¿Quién es Carolina?**
- Foto cálida y profesional
- Breve texto místico/conversacional sobre su misión

### 3. **Beneficios o señales de que necesitas ayuda**
- Formato tipo tarjetas con íconos:
  - “¿Te sientes perdida, sin propósito?”
  - “¿Tus relaciones están desequilibradas?”
  - “¿Sientes que repites patrones emocionales?”

### 4. **Servicios principales o enfoque**
- Tipos de sesiones ofrecidas:
  - Acompañamiento psico-cuántico
  - Reprogramación de creencias
  - Talleres de manifestación
- Botón CTA: “Quiero saber más” (ancla a contacto)

### 5. **Testimonios**
- Carrusel de mensajes de WhatsApp simulados
- Videos testimoniales (autoplay silencioso, si aplica)

### 6. **Preguntas Frecuentes**
- Formato acordeón interactivo
  - ¿Cómo es una sesión virtual?
  - ¿Cuánto dura?
  - ¿Necesito experiencia previa en coaching?

### 7. **Formulario de Contacto (Lead Form)**
- Campos: nombre, correo, teléfono, mensaje
- CTA: “Quiero comenzar mi transformación”
- Conexión con Notion, Airtable o Google Sheets + automatización con Zapier

### 8. **Footer**
- Frase de cierre: _"Tu viaje hacia tu mejor versión empieza hoy 🌟"_
- Redes sociales (Instagram como foco)
- Contacto adicional

---

## ⚙️ Funcionalidades Prioritarias

| Función                      | Implementación sugerida                          |
|-----------------------------|--------------------------------------------------|
| Diseño responsivo moderno   | Tailwind CSS                                     |
| Animaciones suaves          | Framer Motion o Astro transitions                |
| Captura de leads            | Formulario con conexión a Notion / Airtable / Sheets |
| Envío de notificaciones     | Automatización con Zapier o Webhooks             |
| Despliegue                  | Vercel o Netlify (dominio personalizado)         |
| SEO y metadatos             | Configuración personalizada con Astro            |

---

## 🧩 Componentes Clave a Crear

| Componente         | Descripción                                              |
|--------------------|----------------------------------------------------------|
| `Hero.astro`       | Frase potente inicial + CTA                              |
| `About.astro`      | Presentación personal + imagen                           |
| `Benefits.astro`   | Lista emocional de señales (tarjetas/íconos)             |
| `Services.astro`   | Breve descripción del enfoque/sesiones                   |
| `Testimonials.astro` | Carrusel de testimonios (texto o video)               |
| `FAQ.astro`        | Preguntas frecuentes en acordeón                         |
| `LeadForm.astro`   | Formulario con integración a API externa                 |
| `Footer.astro`     | Frase final, redes sociales, contacto                    |

---

## 🔗 Integración del Formulario - Opciones

### Opción 1: **Notion**
- Guardar leads en una base de datos tipo tabla
- Conexión vía API personalizada o Zapier

### Opción 2: **Airtable**
- Visual y amigable
- Compatible con herramientas como Make, Zapier o n8n

### Opción 3: **Google Sheets**
- Integración rápida
- Automatizable vía Apps Script o API pública

---

## 🎨 Paletas de Colores Propuestas

### 1. **Empoderamiento femenino vibrante**

| Color     | Uso sugerido         |
|-----------|----------------------|
| 🟣 #9B5DE5 | CTA, botones primarios |
| 💗 #F15BB5 | Elementos destacados  |
| 🌿 #00BBF9 | Detalles sutiles     |
| ⚪ #FAF9F9 | Fondo general         |
| 🔘 #2D2D2D| Texto principal       |

> Psicología: Transmite seguridad, pasión, energía creativa y acción decidida.

---

### 2. **Calidez emocional natural**

| Color     | Uso sugerido         |
|-----------|----------------------|
| 🌸 #FF6B6B | Botones, títulos     |
| 🌿 #6BCB77 | Detalles armoniosos  |
| 🌞 #FFD93D | Énfasis en testimonios |
| 🤍 #FFF9F0 | Fondo principal       |
| 🪵 #22223B | Texto contrastado     |

> Psicología: Transmite humanidad, apoyo, cercanía y bienestar emocional.

---

### 3. **Minimalismo elegante con contraste**

| Color     | Uso sugerido         |
|-----------|----------------------|
| 🖤 #1C1C1E | Fondo o encabezados   |
| 🧡 #FF6A3D | Botón CTA             |
| 🩶 #F2F2F2 | Fondo secundario      |
| 🤎 #5C5470 | Texto suave           |
| 🌕 #FCD581 | Detalles llamativos  |

> Psicología: Profesionalismo, autoridad y elegancia con energía vibrante.
mecheap)

# 📋 Documentación - Landing Page Carolina Trujillo v1.0

## 🎯 **Proyecto Completado**
Landing page profesional para **Carolina Trujillo | Psicóloga Cuántica** enfocada en **captación de leads** y conversión hacia servicios de transformación personal.

## 🏗️ **Arquitectura y Tecnologías**

### **Stack Principal:**
- ⚡ **Astro** - Framework principal
- 🎨 **Tailwind CSS** - Estilizado y responsive design
- 🔍 **Lucide Icons** - Librería de iconos (reemplazó todos los SVGs)
- 📝 **Markdown Collections** - Gestión de contenido dinámico

### **Estructura de Archivos:**
```
src/
├── styles/global.css          # Variables CSS + Tailwind
├── components/
│   ├── Header.astro          # Navbar fijo con menú hamburguesa
│   ├── Home.astro            # Hero section principal  
│   ├── Benefits.astro        # 4 beneficios clave
│   ├── Services.astro        # Servicios con markdown
│   ├── Process.astro         # Proceso de transformación
│   ├── Testimonials.astro    # Carrusel WhatsApp style
│   └── Contact.astro         # Formulario optimizado
└── content/
    ├── services/             # Markdown para servicios
    └── testimonials/         # Markdown para testimonios
```

## 🎨 **Sistema de Diseño**

### **Paleta de Colores:**
- **Primary**: #9B5DE5 (Violeta)
- **Secondary**: #F15BB5 (Rosa) 
- **Accent**: #00BBF9 (Cyan)
- **Warm**: #F59E0B (Dorado)

### **Componentes Clave:**
- ✅ **Navbar responsive** con menú hamburguesa funcional
- ✅ **Cards simétricas** en todas las secciones
- ✅ **Efectos hover** consistentes
- ✅ **Gradientes sutiles** para destacar elementos

## 📱 **Flujo de Usuario Estratégico**

1. **Home** → Presentación y credibilidad
2. **Benefits** → "¿Cómo puedo ayudarte?"
3. **Services** → Opciones específicas de transformación
4. **Process** → Metodología y CTA intermedio
5. **Testimonials** → Prueba social con formato WhatsApp
6. **Contact** → Formulario final de captación

## 🚀 **Características Técnicas**

### **Responsividad:**
- **Mobile First** - Diseño desde 320px
- **Breakpoints**: sm(640px), md(768px), lg(1024px)
- **Grid adaptativo** en todas las secciones

### **Performance:**
- ✅ **Código optimizado** - Reducción del 40-45% en componentes
- ✅ **Lazy loading** preparado
- ✅ **CSS Variables** para fácil mantenimiento
- ✅ **Smooth scroll** implementado

### **Funcionalidades JavaScript:**
- 🍔 **Menú hamburguesa** con toggle y auto-close
- 🎠 **Carrusel testimonios** con navegación y autoplay
- 📝 **Formulario inteligente** con validación en vivo

## 📊 **Gestión de Contenido**

### **Markdown Collections:**
- **Services** - 3 servicios con metadata estructurada
- **Testimonials** - 4 conversaciones WhatsApp realistas

### **Campos de Formulario:**
- Nombre* | Email* | Teléfono* | Mensaje (opcional)
- Validación en tiempo real + mensaje de éxito personalizado

## 🎯 **Objetivo de Conversión**
**Toda la página dirige hacia el formulario de contacto** para capturar leads calificados interesados en servicios de transformación personal.

## 📈 **Próximos Pasos Sugeridos**
- Integración con CRM/Email marketing
- Analytics y tracking de conversiones  
- Tests A/B en CTAs y formulario
- SEO técnico y meta descriptions

---
**Estado:** ✅ **Primera versión completada y funcional**  
**Fecha:** Mayo 2025
