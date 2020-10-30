const button = document.createElement('button');
button.innerText = 'Click Me!';

// al agregar import() en alguna parte, webpack al verlo, hace el code splitting para no cargar todos los bundles de una, sino a medida que se necesitan
button.onclick = () => import('./image_viewer').then(module => module.default());

document.body.appendChild(button);
