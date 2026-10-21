#!/usr/bin/env python3
"""Erzeugt die App-Icons des Lernpfads.

Ein Pfad mit drei Stationen, der nach oben führt – dasselbe Bild wie auf der
Startseite. Aufruf: npm run icons
"""
from PIL import Image, ImageDraw
from pathlib import Path

ZIEL = Path(__file__).resolve().parent.parent / 'icons'
ZIEL.mkdir(parents=True, exist_ok=True)

BLAU = (31, 111, 235)
LILA = (107, 75, 214)


def verlauf(groesse):
    """Diagonaler Verlauf von Blau nach Lila."""
    bild = Image.new('RGB', (groesse, groesse))
    pixel = bild.load()
    for y in range(groesse):
        for x in range(groesse):
            t = (x + y) / (2 * groesse - 2)
            pixel[x, y] = tuple(round(BLAU[i] + (LILA[i] - BLAU[i]) * t) for i in range(3))
    return bild


def zeichne(groesse, rand):
    """`rand` ist der Anteil Luft am Rand – maskable Icons brauchen mehr."""
    gross = groesse * 4                      # vierfach zeichnen, dann verkleinern
    bild = verlauf(gross).convert('RGBA')
    stift = ImageDraw.Draw(bild)

    innen = gross * (1 - 2 * rand)
    links = gross * rand

    def pt(fx, fy):
        return (links + innen * fx, links + innen * fy)

    stationen = [(0.20, 0.82), (0.42, 0.56), (0.62, 0.66), (0.82, 0.22)]
    strich = max(2, int(innen * 0.055))

    # der Pfad
    for a, b in zip(stationen, stationen[1:]):
        stift.line([pt(*a), pt(*b)], fill=(255, 255, 255, 235), width=strich)

    # die Stationen, die letzte als Ziel
    for i, s in enumerate(stationen):
        r = innen * (0.105 if i == len(stationen) - 1 else 0.072)
        x, y = pt(*s)
        stift.ellipse([x - r, y - r, x + r, y + r], fill=(255, 255, 255, 255))
        if i == len(stationen) - 1:
            # Fähnchen im Zielkreis
            k = r * 0.52
            stift.polygon([(x - k * 0.35, y - k), (x + k, y - k * 0.3), (x - k * 0.35, y + k * 0.1)],
                          fill=BLAU)
            stift.line([(x - k * 0.35, y - k), (x - k * 0.35, y + k)], fill=BLAU,
                       width=max(2, int(r * 0.22)))

    return bild.resize((groesse, groesse), Image.LANCZOS)


for groesse, rand, name in [
    (192, 0.14, 'icon-192.png'),
    (512, 0.14, 'icon-512.png'),
    (512, 0.22, 'icon-maskable-512.png'),
]:
    zeichne(groesse, rand).save(ZIEL / name)
    print('geschrieben:', ZIEL / name)
