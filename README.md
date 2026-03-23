# VR Class Project 1 – Interactive 3D Art Environment

## Description

This project explores interactive 3D environments in the browser using WebGL and REGL.

It consists of two parts:

### 1. Virtual Art Gallery

A browser-based 3D gallery adapted to simulate an explorable exhibition space.

* Built on top of an existing REGL-based architecture
* Customized to use a local API and SQLite database
* Supports dynamic loading of artwork data
* Includes textured walls, floor, and spatial navigation

*Note: The system is designed to display original artworks created by me. Due to file size limitations, the full set of images is not included in this repository and can be loaded externally.*

---
<img width="1919" height="953" alt="Screenshot 2026-03-20 125750" src="https://github.com/user-attachments/assets/c1285f36-47f2-464c-8acb-77d8ae296b3b" />


### 2. Mini REGL Room (From Scratch)

A separate 3D environment built from scratch to understand core graphics concepts.

* Custom-built room (floor, walls, ceiling)
* Textured surfaces
* Multiple placeholder paintings (frames)
* Interactive 3D objects (cube and sphere)
* Keyboard-based object movement
* Camera navigation
<img width="793" height="775" alt="Screenshot 2026-03-20 122710" src="https://github.com/user-attachments/assets/f82825fb-5f37-45a3-8dc0-ce96374062c2" />

---

## Purpose

The goal of this project is to understand:

* 3D rendering in the browser
* WebGL fundamentals through REGL
* Model, view, and projection transformations
* Texture mapping
* Object interaction and movement
* Basic game/engine-like architecture

---

## Technologies

* JavaScript
* Node.js
* Express
* SQLite
* REGL (WebGL abstraction)
* gl-mat4 / gl-vec3
* Browserify / Budo

---

## How to Run

### Virtual Art Gallery

```bash
npm install
npm run dev
```

### Mini REGL Room

```bash
npm install
npx budo src/index.js --open
```

---

## Artwork & Credits

All artworks used in this project are original creations by Maral Farhat.

The gallery system is designed specifically to display these works.
Images are not included in the repository due to size constraints, but remain the intellectual property of the author.

---

## Project Structure

```
vr-3d-art-gallery/
│
├── virtual-art-gallery/   # Main gallery project
├── mini-regl-room/        # From-scratch 3D environment
└── README.md
```

---

## Notes

This project was developed as part of a VR / Computer Graphics course.

The gallery demonstrates system integration and architecture,
while the REGL room demonstrates low-level 3D construction and interaction.

---

## Author

Maral Farhat
