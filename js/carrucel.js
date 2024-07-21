const carouselImages = document.querySelector('.carousel_images');
        const items = document.querySelectorAll('.carousel_item');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        const carouselText = document.getElementById('carousel_text');
        const cardContainer = document.getElementById('card_container');
        const carouselTable = document.getElementById('carousel_table');

        const textContents = {
            "Conectividad Global": {
                description: "La conectividad global ha permitido que las personas y empresas estén más interconectadas que nunca, facilitando la comunicación y el intercambio de información a nivel mundial.",
                cards: [
                    { title: "Impacto Económico", content: "El comercio electrónico y las transacciones financieras internacionales han crecido exponencialmente." },
                    { title: "Innovación Tecnológica", content: "Las innovaciones en telecomunicaciones y redes han mejorado la velocidad y fiabilidad de las conexiones." },
                    { title: "Acceso a Información", content: "El acceso a la información global ha democratizado el conocimiento y la educación." }
                ],
                table: {
                    headers: ["Beneficio", "Detalle"],
                    rows: [
                        ["Facilita la comunicación", "Permite la interacción en tiempo real entre personas y empresas."],
                        ["Acceso a mercados", "Expande el alcance de los negocios a nivel mundial."],
                        ["Reducción de costos", "Disminuye los gastos de comunicación y desplazamiento."]
                    ]
                }
            },
            "Educación en Línea": {
                description: "La educación en línea ha revolucionado la forma en que aprendemos, proporcionando acceso a recursos educativos desde cualquier lugar y en cualquier momento.",
                cards: [
                    { title: "Flexibilidad", content: "Los estudiantes pueden aprender a su propio ritmo y horario." },
                    { title: "Accesibilidad", content: "Más personas pueden acceder a la educación superior y especializada." },
                    { title: "Variedad de Cursos", content: "Amplia oferta de cursos y programas en diversas disciplinas." }
                ],
                table: {
                    headers: ["Ventaja", "Detalle"],
                    rows: [
                        ["Acceso global", "Permite a estudiantes de todo el mundo acceder a la educación."],
                        ["Ahorro de tiempo", "Elimina la necesidad de desplazarse a una institución educativa."],
                        ["Personalización", "Adapta el ritmo de aprendizaje a las necesidades del estudiante."]
                    ]
                }
            },
            "Telemedicina": {
                description: "La telemedicina permite a los profesionales de la salud atender a pacientes de manera remota, mejorando el acceso a servicios médicos y reduciendo el tiempo de espera.",
                cards: [
                    { title: "Acceso Remoto", content: "Pacientes en áreas rurales o aisladas pueden recibir atención médica." },
                    { title: "Eficiencia", content: "Reducción de tiempos de espera y desplazamientos." },
                    { title: "Monitoreo Continuo", content: "Pacientes con enfermedades crónicas pueden ser monitoreados regularmente." }
                ],
                table: {
                    headers: ["Beneficio", "Detalle"],
                    rows: [
                        ["Acceso rápido", "Facilita consultas médicas sin largas esperas."],
                        ["Reducción de costos", "Disminuye los gastos de traslado y hospitalización."],
                        ["Continuidad del cuidado", "Permite el seguimiento constante de pacientes crónicos."]
                    ]
                }
            },
            "Comunicación Social": {
                description: "La comunicación social se ha transformado con el uso de plataformas digitales, permitiendo una interacción más rápida y eficiente entre las personas.",
                cards: [
                    { title: "Redes Sociales", content: "Conexiones y comunicación instantánea con amigos y familiares." },
                    { title: "Colaboración en Línea", content: "Herramientas colaborativas para trabajar en proyectos conjuntos." },
                    { title: "Difusión de Información", content: "Compartir noticias y eventos en tiempo real." }
                ],
                table: {
                    headers: ["Ventaja", "Detalle"],
                    rows: [
                        ["Interacción instantánea", "Facilita la comunicación en tiempo real."],
                        ["Acceso a información", "Permite compartir y recibir noticias rápidamente."],
                        ["Colaboración remota", "Facilita el trabajo conjunto en proyectos a distancia."]
                    ]
                }
            },
            "Trabajo Colaborativo": {
                description: "El trabajo colaborativo en línea ha facilitado que equipos de todo el mundo trabajen juntos en proyectos, mejorando la productividad y la creatividad.",
                cards: [
                    { title: "Herramientas de Colaboración", content: "Uso de plataformas como Slack, Teams y Trello." },
                    { title: "Trabajo Remoto", content: "Posibilidad de trabajar desde cualquier lugar del mundo." },
                    { title: "Creatividad", content: "Diversidad de ideas y perspectivas en proyectos." }
                ],
                table: {
                    headers: ["Beneficio", "Detalle"],
                    rows: [
                        ["Ahorro de tiempo", "Reduce la necesidad de reuniones presenciales."],
                        ["Flexibilidad", "Permite trabajar desde cualquier ubicación."],
                        ["Diversidad", "Fomenta la inclusión de diferentes perspectivas."]
                    ]
                }
            },
            "Inclusión Digital": {
                description: "La inclusión digital busca cerrar la brecha tecnológica, asegurando que todas las personas tengan acceso a las herramientas y recursos digitales necesarios.",
                cards: [
                    { title: "Acceso a Tecnología", content: "Provisión de dispositivos y conectividad a comunidades desfavorecidas." },
                    { title: "Educación Digital", content: "Capacitación en habilidades digitales para todos." },
                    { title: "Participación Igualitaria", content: "Garantizar que todos puedan participar en la economía digital." }
                ],
                table: {
                    headers: ["Ventaja", "Detalle"],
                    rows: [
                        ["Acceso equitativo", "Asegura que todos puedan usar tecnología."],
                        ["Desarrollo de habilidades", "Capacita a las personas en competencias digitales."],
                        ["Participación económica", "Facilita la inclusión en el mercado digital."]
                    ]
                }
            }
        };

        let index = 0;

        function showNextImage() {
            index++;
            if (index >= items.length) {
                index = 0;
            }
            updateCarousel();
        }

        function showPrevImage() {
            index--;
            if (index < 0) {
                index = items.length - 1;
            }
            updateCarousel();
        }

        function updateCarousel() {
            carouselImages.style.transform = `translateX(${-index * 100}%)`;
            const currentCaption = items[index].querySelector('.carousel_caption').innerText;
            const content = textContents[currentCaption];

            carouselText.innerText = content.description;
            cardContainer.innerHTML = '';

            content.cards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.innerHTML = `
                    <h3>${card.title}</h3>
                    <p>${card.content}</p>
                `;
                cardContainer.appendChild(cardElement);
            });

            let tableHtml = '<table><thead><tr>';
            content.table.headers.forEach(header => {
                tableHtml += `<th>${header}</th>`;
            });
            tableHtml += '</tr></thead><tbody>';
            content.table.rows.forEach(row => {
                tableHtml += '<tr>';
                row.forEach(cell => {
                    tableHtml += `<td>${cell}</td>`;
                });
                tableHtml += '</tr>';
            });
            tableHtml += '</tbody></table>';

            carouselTable.innerHTML = tableHtml;
        }

        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPrevImage);

        // Inicializar el contenido textual y tarjetas
        updateCarousel();