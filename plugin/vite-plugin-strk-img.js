export default function strkImgPlugin() {
  return {
    name: 'vite-plugin-strk-img',
    transform(code, id) {
      return { code, map: null };
    }
  };
}
EOF && cat <<EOF > plugin/vite-plugin-visual-edit.js
export default function visualEditPlugin() {
  return {
    name: 'vite-plugin-visual-edit',
    transform(code, id) {
      return { code, map: null };
    }
  };
}
EOF && cat <<EOF > plugin/vite-plugin-check-broken-img.js
export default function checkBrokenImgPlugin() {
  return {
    name: 'vite-plugin-check-broken-img',
    transform(code, id) {
      return { code, map: null };
    }
  };
}
EOF && cat <<EOF > plugin/vite-plugin-check-placeholder-img.js
export default function checkPlaceholderImgPlugin() {
  return {
    name: 'vite-plugin-check-placeholder-img',
    transform(code, id) {
      return { code, map: null };
    }
  };
}
EOF > plugin/vite-plugin-strk-img.js
export default function strkImgPlugin() {
  return {
    name: 'vite-plugin-strk-img',
    transform(code, id) {
      return { code, map: null };
    }
  };
}
EOF && cat <<EOF > plugin/vite-plugin-visual-edit.js
export default function visualEditPlugin() {
  return {
    name: 'vite-plugin-visual-edit',
    transform(code, id) {
      return { code, map: null };
    }
  };
}
EOF && cat <<EOF > plugin/vite-plugin-check-broken-img.js
export default function checkBrokenImgPlugin() {
  return {
    name: 'vite-plugin-check-broken-img',
    transform(code, id) {
      return { code, map: null };
    }
  };
}
EOF && cat <<EOF > plugin/vite-plugin-check-placeholder-img.js
export default function checkPlaceholderImgPlugin() {
  return {
    name: 'vite-plugin-check-placeholder-img',
    transform(code, id) {
      return { code, map: null };
    }
  };
}
