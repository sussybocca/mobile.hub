// src/components/dynamicLoader.js
export async function loadAppFromCode(codeStr) {
  const blob = new Blob([codeStr], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const module = await import(/* @vite-ignore */ url);
  URL.revokeObjectURL(url);
  return module.default;
}
