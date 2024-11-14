// Configuramos las dimensiones del lienzo SVG y del árbol hiperbólico
width = 1500;
height = 1500;
radius = Math.min(width, height) / 2.5; // Radio del árbol hiperbólico

// Creamos el linezo SVG y centramos el grupo de visualización
svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g") // Añadimos un grupo para la visualización
    .attr("transform", `translate(${width / 2},${height / 2})`); // Centramos el grupo en el SVG

// Configuramos una escala logarítmica más ajustada para la proyección hiperbólica
logScale = d3.scaleLog()
    .domain([1,radius]) // Ajuste de tamaño para mayor compresión radial
    .range([1, radius * 0.8]) // Aumentamos la separación para nodos de diferentes niveles

// Configuramos la disposición de árbol hiperbólico
tree = d3.tree()
    .size([2 * Math.PI, radius - 100]) // Tamaño del árbol en coordenadas radiales
    .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth); // Separación entre nodos

// Cargamos los datos JSON y construimos el árbol
d3.json("youtube_hierarchy.json").then(data => {
    root = d3.hierarchy(data); // Convertimos los datos JSON en una estructura jerárquica
    tree(root); // Se aplica la disposición de árbol a la estructura

    // Creamos los enlaces entre los nodos
    svg.selectAll("path.link")
        .data(root.links()) // Vinculamos los datos de enlaces entre nodos
        .enter().append("path")
        .attr("class", "link") // Se asigna la clase 'link' a cada enlace
        .attr("d", d3.linkRadial() // Se define la forma de los enlaces en un sistema radial, configurando el ángulo y la distancia radial del enlace
            .angle(d => d.x) 
            .radius(d => logScale(d.y))); // Usamos la escala logarítmica ajustada

    // Creamos los nodos y configuramos eventos del tooltip
    node = svg.selectAll("g.node")
        .data(root.descendants()) // Vinculamos los datos de los nodos
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `
            rotate(${d.x * 180 / Math.PI - 90})
            translate(${logScale(d.y)},0)
        `) // Calculamos la posición de cada nodo en coordenadas radiales
        .on("mouseover", tip.show)  // Mostramos la información al pasar el ratón
        .on("mouseout", tip.hide);  // Escondemos la información al salir con el ratón

    // Agregamos los círculos para los nodos
    node.append("circle")
        .attr("r", d => 5 / (d.depth + 1)) // Radio del círculo de cada nodo
        .style("fill", d => d.children ? "#555" : "#999"); // Color del nodo


    // Agregamos las etiquetas de texto para los nodos
    node.append("text")
        .attr("dy", "0.31em") // Alineación vertical del nodo
        .attr("x", d => d.x < Math.PI === !d.children ? 8 : -8) // Ajuste de la posición horizontal del texto 
        .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end") // Ajuste de la alineación del texto
        .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null) // Rotamos el texto 
        .text(d => d.data.name) // Establecemos el texto con el nombre del nodo
        .clone(true).lower() // Dibujamos una sombra para mejorar la visibilidad del texto
        .attr("stroke", "white"); // Color blanco para la sombra del texto
});

// Inicializamos el tooltip para mostrar la información en los nodos
tip = d3.tip()
.attr("class", "d3-tip") // Asignamos la clase CSS 'd3-tip' al tooltip
.offset([-10, 0]) // Posición del tooltip (ligeramente arriba del nodo)
.html(d => `<strong>Name:</strong> ${d.data.name}<br><strong>Subscribers:</strong> ${d.data.subscribers || 'N/A'}<br><strong>Views:</strong> ${d.data.video_views || 'N/A'}<br><strong>Created Year:</strong> ${d.data.created_date || 'N/A'}`);

svg.call(tip);
