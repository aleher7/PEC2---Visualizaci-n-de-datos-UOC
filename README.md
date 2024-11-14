# PEC2---Visualizaci-n-de-datos-UOC
Se trata de las tres representaciones necesarias que se me propuso para la PEC2 de Visualización de datos de la Universitat Oberta de Catalunya.

Creador: Alejandro Romaguera Hernández.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# hyperbolic-tree
En primer lugar, la representación de Hyperbolic Tree (árbol hiperbólico), realizada a través de JavaScript (gracias a la librería D3.js) y HTML, donde se representa una jerarquía de los canales de Youtube más vistos y seguidos del mundo, emepzando por el país donde se enceuntra el creador del canal, seguido por el tipo de canal que se considera, llegando en tercer lugar al propio canal, el cual contiene información de suscriptores que tiene, las visitas de los videos y la fecha de creación. Con esta representación, se permite ver países con más influencia en la plataforma, comparandolo con el resto de países.

  - index.html -->  Archivo HTML que representa el árbol hiperbólico.
  - hyperbolic_tree.js --> Archivo de JavaScript que genera el árbol hiperbólico.
  - yotube_hierachy.json --> Archivo JSON que contiene en formato JSON el excel Global_Youtube_Statics.csv (Fuente: https://www.kaggle.com/code/zabihullah18/global-countries-eda/input?select=Military+Expenditure.csv) *Nota: se ha añadido una nueva columna, la cual actuará como nodo central, teniendo el mismo registro para cada fila, Youtube*.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# cartogram
La representación hecha a través de la técnica Cartogram dibuja el estado de la democracia en todo el mundo, basado en el Índice de Democracia compilado por la Unidad de Inteligencia de The Economist. El índice ofrece una visión matizada de las prácticas democráticas a nivel global, combinando diversos factores para producir una puntuación que va de 0 (menos democrático) a 10 (más democrático). (Fuente del dataset: https://www.kaggle.com/datasets/shreyasur965/democracy-index).
- cartogram.txt -> Archivo TXT que dispone del enalce al repositorio de Datawrapper, donde se encuentra la representación
- data-cbc3H.csv -> Archivo CSV que se trata de el dataset modificado a partir del dataset original para la creación del Cartogram.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# waffle-chart
La representación hecha a través de la técncia Waffle Chart dibuja las valoraciones de reseñas hacia los parques de Disneyland que se enceuntran en el mundo (exactamente 3 parques distribuidos en Hong Kong, Paris y California), pudiendo ver que parques son considerados mejores o peores por los visitantes. (Fuente: https://www.kaggle.com/datasets/arushchillar/disneyland-reviews)
- waffle_chart.txt -> Archivo TXT que dispone del enlace al repositorio de Fluorish, donde se encuentra la representación
- Review_Counts_by_Branch_and_Rating.csv -> Archivo CSV que se trata del dataset modificado a partir del dataset original para la creación del Waffle Chart, donde se recopila el recuento de las valoraciones por puntuación.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Bibliografía
Sobretodo, dentro de la creación de la técncia Hyperbolic Tree en JavaScript, se han utilizado varias fuentes para llevar a cabo la representación:
- https://gist.github.com/ramiroaznar/e13ddc92535ad54978e2311973ba8c94
- https://gist.github.com/aaizemberg/6153101?permalink_comment_id=4512331
- https://gist.github.com/jcmmutad/8ff82729321db116e99ebb64a7c77686
