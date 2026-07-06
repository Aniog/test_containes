import re

replacements = {
    'photo-1617038260897-41a1f14fa8a3': 'photo-1515562141207-7a88fb7ce338',
    'photo-1602751584552-8ba420552259': 'photo-1605100804763-247f67b3557e',
    'photo-1599643478518-17488fbbcd75': 'photo-1599643477877-530eb83abc8e',
    'photo-1617038220968-d4ad9c47c247': 'photo-1630019852942-f89202989a59',
}

files = [
    'src/data/products.js',
    'src/components/home/HeroSection.jsx',
    'src/components/home/UGCReelSection.jsx',
    'src/components/home/CategoryTiles.jsx',
    'src/components/home/BrandStory.jsx',
]

for f in files:
    with open(f, 'r') as fh:
        content = fh.read()
    for old, new in replacements.items():
        content = content.replace(old, new)
    with open(f, 'w') as fh:
        fh.write(content)
    print('Fixed', f)
