# Buscaminas en React JS

🌐 **Demo en vivo**: https://jeff-aporta.github.io/minesweeper-2025/

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-6.26.0-F9DC3E?style=for-the-badge&logo=babel&logoColor=black)

Una implementación moderna del clásico juego Buscaminas utilizando React con JSX y Babel para transpilación en tiempo real. Este proyecto demuestra conceptos avanzados de React como componentes de clase, manejo de estado, eventos del DOM y renderizado condicional.

## 🚀 Características

- **Interfaz Intuitiva**: Diseño moderno con efectos visuales y animaciones CSS
- **Jugabilidad Completa**:
  - Clic izquierdo para revelar celdas
  - Clic derecho para marcar/desmarcar banderas
  - Doble clic para abrir celdas vecinas automáticamente
- **Detección de Victoria/Derrota**: Sistema completo de estados del juego
- **Contador de Minas**: Muestra las minas restantes en tiempo real
- **Nuevo Juego**: Reinicia el tablero con nueva distribución de minas
- **Efectos Visuales**: Animaciones de victoria y efectos hover

## 🎮 Cómo Jugar

1. **Objetivo**: Revelar todas las celdas que no contienen minas
2. **Controles**:
   - **Clic izquierdo**: Revelar celda
   - **Clic derecho**: Colocar/quitar bandera
   - **Doble clic**: Abrir celdas vecinas (en celdas ya reveladas)
3. **Números**: Indican cuántas minas hay en las 8 celdas adyacentes
4. **Banderas**: Úsalas para marcar celdas que crees que contienen minas
5. **Victoria**: Revela todas las celdas sin minas
6. **Derrota**: Si haces clic en una mina, el juego termina

## 📁 Estructura del Proyecto

```
Buscaminas/
├── index.html              # Archivo HTML principal
├── index.jsx               # Componente principal de React
├── src/
│   ├── css/
│   │   ├── index.css       # Estilos principales del juego
│   │   └── util.css        # Estilos utilitarios
│   ├── js/
│   │   ├── index.js        # Lógica principal del juego
│   │   ├── recursive.jsx   # Componentes reutilizables
│   │   ├── start.js        # Configuración e inicialización
│   │   └── utils.js        # Utilidades generales
│   └── svg/
│       ├── flag.svg        # Ícono de bandera
│       └── icon-mine.svg   # Ícono de mina
└── README.md               # Este archivo
```

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 18.3.1**: Biblioteca principal para la interfaz de usuario
- **ReactDOM 18.3.1**: Renderizado del DOM virtual
- **Babel Standalone 6.26.0**: Transpilación JSX en tiempo real
- **JavaScript ES6+**: Lógica del juego y manipulación del DOM
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con gradientes, sombras y animaciones

### Características Técnicas

- **Componentes de Clase**: Uso de `React.Component` con ciclo de vida
- **Estado Local**: Manejo de estado sin librerías externas
- **Eventos del DOM**: Manejo completo de eventos de mouse
- **Renderizado Condicional**: Lógica de presentación basada en estado
- **CSS Grid/Flexbox**: Layout responsivo y moderno
- **Animaciones CSS**: Efectos visuales y transiciones

## 🎯 Configuración del Juego

El juego se puede personalizar modificando las constantes en `src/js/start.js`:

```javascript
let WIDTH_BOARD = 10; // Ancho del tablero (celdas)
let HEIGHT_BOARD = 10; // Alto del tablero (celdas)
let MINES_PERCENT = 0.05; // Porcentaje de minas (5%)
const SIDE_CELL = 50; // Tamaño de cada celda en píxeles
```

## 🚀 Instalación y Ejecución

1. **Clona o descarga** el repositorio
2. **Abre** el archivo `index.html` en tu navegador web como web estática
3. **¡Juega!** No requiere instalación de dependencias

> **Nota**: Este proyecto utiliza CDNs para las librerías de React y Babel, por lo que funciona directamente en el navegador sin necesidad de un servidor local.

## 🧠 Algoritmos Implementados

### Generación del Tablero

- **Distribución Aleatoria**: Las minas se colocan usando `Math.random()`
- **Algoritmo de Convolución**: Calcula las minas vecinas para cada celda

### Revelado de Celdas

- **Revelado Recursivo**: Cuando una celda sin minas vecinas se revela, automáticamente revela las celdas adyacentes
- **Apertura de Vecinos**: Doble clic en celdas numeradas abre automáticamente las celdas vecinas no marcadas

### Detección de Estados

- **Victoria**: Se verifica que solo queden celdas con minas sin revelar
- **Derrota**: Se activa al hacer clic en una mina

## 🎨 Características Visuales

- **Tema Oscuro**: Gradiente púrpura de fondo
- **Colores Diferenciados**: Cada número de minas vecinas tiene su propio color
- **Animación de Victoria**: Efecto de rotación de colores al ganar
- **Hover Effects**: Retroalimentación visual al pasar el mouse

## 📚 Conceptos de React Demostrados

1. **Componentes de Clase**: Uso de `class extends React.Component`
2. **Ciclo de Vida**: `componentDidMount()` para inicialización
3. **Manejo de Estado**: `forceUpdate()` para re-renderizado manual
4. **Eventos Sintéticos**: Manejo de eventos de mouse con React
5. **Renderizado Condicional**: Lógica JSX basada en estado
6. **Composición de Componentes**: Estructura jerárquica de componentes
7. **Props**: Paso de datos entre componentes padre e hijo

## 🔧 Funciones Principales

### `initGameBoard()`

Inicializa el tablero de juego con minas distribuidas aleatoriamente y calcula las minas vecinas.

### `gameOver()`

Maneja el estado de derrota, revelando todas las minas del tablero.

### `openIsland({ row, col, recursive })`

Implementa el algoritmo de revelado recursivo para celdas vacías.

### `successGame()`

Verifica si el jugador ha ganado el juego.

### `countFlag()`

Cuenta el número total de banderas colocadas en el tablero.
