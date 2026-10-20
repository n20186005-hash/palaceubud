import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
for (const page of ['index', 'cookie-settings']) {
  const source = readFileSync(`src/pages/${page}.astro`, 'utf8');
  const script = [...source.matchAll(/<script is:inline>([\s\S]*?)<\/script>/g)].map(m => m[1]).find(s => s.includes('const STORAGE_KEY'));
  const nodes = new Map();
  const get = id => {
    if (!nodes.has(id)) nodes.set(id, { hidden: true, checked: false, textContent: '', events: {}, addEventListener(event, fn) { this.events[event] = fn; } });
    return nodes.get(id);
  };
  const loaded = [];
  const context = { window: {}, localStorage: { getItem() { throw Error('blocked'); }, setItem() { throw Error('blocked'); } }, document: { getElementById: get, querySelector: () => loaded[0], createElement: () => ({ dataset: {} }), head: { appendChild: s => loaded.push(s) } } };
  vm.runInNewContext(script, context);
  assert.equal(context.window['ga-disable-G-HXM22WWPKP'], true);
  assert.equal(loaded.length, 0);
  if (page === 'index') get('banner-accept').events.click();
  else { get('cookie-analytics').checked = true; get('save-cookie').events.click(); }
  assert.equal(context.window['ga-disable-G-HXM22WWPKP'], false);
  assert.equal(loaded.length, 1);
  get(page === 'index' ? 'banner-reject' : 'reject-cookie').events.click();
  assert.equal(context.window['ga-disable-G-HXM22WWPKP'], true);
  assert.match(get(page === 'index' ? 'banner-status' : 'cookie-status').textContent, /tidak dapat menyimpannya/);
  assert.equal(loaded.length, 1);
}
console.log('Consent: blocked reads/writes, explicit grant, and rejection passed on both pages.');
