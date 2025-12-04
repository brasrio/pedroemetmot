/**
 * Pedro & Metmot - Love Page
 * JavaScript para animações e efeitos interativos
 * 🐼💕 Versão super fofa com pandas! 🐼💕
 */

(function() {
    'use strict';

    // ==========================================================================
    // Configurações
    // ==========================================================================
    const CONFIG = {
        particles: {
            heartCount: 25,
            starCount: 30,
            pandaCount: 8,
            cuteCount: 15,
            heartEmojis: ['❤️', '💕', '💗', '💖', '💝', '💓', '💞', '💘', '🩷', '🤍'],
            pandaEmojis: ['🐼'],
            cuteEmojis: ['✨', '🌸', '🦋', '🌟', '⭐', '💫', '🎀', '🌷', '🌺', '💮'],
            sparkleEmojis: ['✨', '💖', '⭐', '🌟']
        },
        animation: {
            particleMinDuration: 6,
            particleMaxDuration: 12,
        }
    };

    // ==========================================================================
    // Módulo: Particles (Corações, Pandas e Coisas Fofas)
    // ==========================================================================
    const ParticlesModule = {
        container: null,

        init() {
            this.container = document.querySelector('.particles');
            if (!this.container) return;

            this.createHeartParticles();
            this.createStarParticles();
            this.createPandaParticles();
            this.createCuteParticles();
            this.createFloatingBubbles();
        },

        // Corações flutuantes
        createHeartParticles() {
            for (let i = 0; i < CONFIG.particles.heartCount; i++) {
                setTimeout(() => {
                    this.createFloatingEmoji('heart');
                }, i * 300);
            }

            setInterval(() => {
                this.createFloatingEmoji('heart');
            }, 1500);
        },

        // Pandas flutuantes 🐼
        createPandaParticles() {
            for (let i = 0; i < CONFIG.particles.pandaCount; i++) {
                setTimeout(() => {
                    this.createFloatingPanda();
                }, i * 800 + 500);
            }

            setInterval(() => {
                this.createFloatingPanda();
            }, 4000);
        },

        // Emojis fofos extras
        createCuteParticles() {
            for (let i = 0; i < CONFIG.particles.cuteCount; i++) {
                setTimeout(() => {
                    this.createFloatingEmoji('cute');
                }, i * 400 + 200);
            }

            setInterval(() => {
                this.createFloatingEmoji('cute');
            }, 2500);
        },

        createFloatingEmoji(type) {
            const element = document.createElement('div');
            element.className = `particles__item particles__item--${type}`;
            
            const emojis = type === 'heart' 
                ? CONFIG.particles.heartEmojis 
                : CONFIG.particles.cuteEmojis;
            element.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            const startX = Math.random() * 100;
            element.style.left = `${startX}%`;
            element.style.bottom = '-60px';
            element.style.position = 'absolute';
            element.style.fontSize = `${1 + Math.random() * 1.5}rem`;
            element.style.pointerEvents = 'none';
            element.style.zIndex = '5';
            
            const duration = CONFIG.animation.particleMinDuration + 
                           Math.random() * (CONFIG.animation.particleMaxDuration - CONFIG.animation.particleMinDuration);
            
            this.container.appendChild(element);
            this.animateFloatingUp(element, duration, startX);
        },

        createFloatingPanda() {
            const panda = document.createElement('div');
            panda.className = 'particles__item particles__item--panda';
            panda.textContent = CONFIG.particles.pandaEmojis[Math.floor(Math.random() * CONFIG.particles.pandaEmojis.length)];
            
            const startX = Math.random() * 100;
            panda.style.left = `${startX}%`;
            panda.style.bottom = '-80px';
            panda.style.position = 'absolute';
            panda.style.fontSize = `${2 + Math.random() * 1.5}rem`;
            panda.style.pointerEvents = 'none';
            panda.style.zIndex = '6';
            
            this.container.appendChild(panda);
            this.animatePanda(panda, startX);
        },

        animateFloatingUp(element, duration, startX) {
            const swayAmount = 15 + Math.random() * 20;
            const rotateAmount = 30 + Math.random() * 30;
            
            const keyframes = [
                { 
                    bottom: '-60px', 
                    opacity: 0,
                    left: `${startX}%`,
                    transform: `scale(0.3) rotate(0deg)`
                },
                { 
                    bottom: '15%', 
                    opacity: 0.9,
                    left: `${startX + swayAmount * 0.3}%`,
                    transform: `scale(1.1) rotate(${rotateAmount * 0.3}deg)`
                },
                { 
                    bottom: '35%', 
                    opacity: 1,
                    left: `${startX - swayAmount * 0.2}%`,
                    transform: `scale(1) rotate(-${rotateAmount * 0.2}deg)`
                },
                { 
                    bottom: '55%', 
                    opacity: 0.8,
                    left: `${startX + swayAmount * 0.4}%`,
                    transform: `scale(0.95) rotate(${rotateAmount * 0.4}deg)`
                },
                { 
                    bottom: '75%', 
                    opacity: 0.5,
                    left: `${startX - swayAmount * 0.3}%`,
                    transform: `scale(0.85) rotate(-${rotateAmount * 0.3}deg)`
                },
                { 
                    bottom: '110%', 
                    opacity: 0,
                    left: `${startX + swayAmount * 0.2}%`,
                    transform: `scale(0.6) rotate(${rotateAmount}deg)`
                }
            ];

            const animation = element.animate(keyframes, {
                duration: duration * 1000,
                easing: 'ease-out',
                fill: 'forwards'
            });

            animation.onfinish = () => element.remove();
        },

        animatePanda(element, startX) {
            const duration = 12 + Math.random() * 6;
            const bounceHeight = 20 + Math.random() * 15;
            
            const keyframes = [
                { 
                    bottom: '-80px', 
                    opacity: 0,
                    left: `${startX}%`,
                    transform: 'scale(0.5) rotate(-10deg)'
                },
                { 
                    bottom: `${bounceHeight}%`, 
                    opacity: 1,
                    left: `${startX + 5}%`,
                    transform: 'scale(1.2) rotate(5deg)'
                },
                { 
                    bottom: `${bounceHeight + 10}%`, 
                    opacity: 1,
                    left: `${startX - 3}%`,
                    transform: 'scale(1) rotate(-5deg)'
                },
                { 
                    bottom: `${bounceHeight + 5}%`, 
                    opacity: 1,
                    left: `${startX + 8}%`,
                    transform: 'scale(1.1) rotate(8deg)'
                },
                { 
                    bottom: `${bounceHeight + 20}%`, 
                    opacity: 0.9,
                    left: `${startX - 5}%`,
                    transform: 'scale(1) rotate(-3deg)'
                },
                { 
                    bottom: '110%', 
                    opacity: 0,
                    left: `${startX + 10}%`,
                    transform: 'scale(0.8) rotate(15deg)'
                }
            ];

            const animation = element.animate(keyframes, {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                fill: 'forwards'
            });

            animation.onfinish = () => element.remove();
        },

        // Bolhas flutuantes decorativas
        createFloatingBubbles() {
            for (let i = 0; i < 10; i++) {
                this.createBubble();
            }

            setInterval(() => {
                this.createBubble();
            }, 3500);
        },

        createBubble() {
            const bubble = document.createElement('div');
            bubble.className = 'particles__item particles__item--bubble';
            
            const size = 10 + Math.random() * 30;
            const startX = Math.random() * 100;
            
            bubble.style.cssText = `
                position: absolute;
                left: ${startX}%;
                bottom: -50px;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: radial-gradient(circle at 30% 30%, 
                    rgba(255, 182, 193, 0.4), 
                    rgba(255, 105, 180, 0.1));
                border: 1px solid rgba(255, 182, 193, 0.3);
                pointer-events: none;
                z-index: 3;
            `;
            
            this.container.appendChild(bubble);
            
            const duration = 8 + Math.random() * 8;
            const keyframes = [
                { bottom: '-50px', opacity: 0, transform: 'scale(0.5)' },
                { bottom: '30%', opacity: 0.6, transform: 'scale(1)' },
                { bottom: '60%', opacity: 0.4, transform: 'scale(1.1)' },
                { bottom: '100%', opacity: 0, transform: 'scale(0.8)' }
            ];

            bubble.animate(keyframes, {
                duration: duration * 1000,
                easing: 'ease-out',
                fill: 'forwards'
            }).onfinish = () => bubble.remove();
        },

        // Estrelas brilhantes no fundo
        createStarParticles() {
            for (let i = 0; i < CONFIG.particles.starCount; i++) {
                this.createStar();
            }
        },

        createStar() {
            const star = document.createElement('div');
            star.className = 'particles__item particles__item--star';
            
            const size = 2 + Math.random() * 4;
            star.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, #fff 0%, #ffd700 50%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 2;
            `;
            
            this.container.appendChild(star);
            this.animateStar(star);
        },

        animateStar(element) {
            const duration = 1.5 + Math.random() * 2;
            const delay = Math.random() * 3000;
            
            setTimeout(() => {
                element.animate([
                    { opacity: 0.2, transform: 'scale(0.5)', boxShadow: '0 0 5px #ffd700' },
                    { opacity: 1, transform: 'scale(1.5)', boxShadow: '0 0 15px #ffd700, 0 0 30px #fff' },
                    { opacity: 0.2, transform: 'scale(0.5)', boxShadow: '0 0 5px #ffd700' }
                ], {
                    duration: duration * 1000,
                    easing: 'ease-in-out',
                    iterations: Infinity
                });
            }, delay);
        }
    };

    // ==========================================================================
    // Módulo: Cursor Trail (Rastro fofo no mouse)
    // ==========================================================================
    const CursorTrailModule = {
        isTouch: false,
        lastSparkle: 0,

        init() {
            this.isTouch = 'ontouchstart' in window;
            if (this.isTouch) return;

            document.addEventListener('mousemove', this.handleMouseMove.bind(this));
            document.addEventListener('click', this.handleClick.bind(this));
        },

        handleMouseMove(e) {
            const now = Date.now();
            if (now - this.lastSparkle > 50 && Math.random() > 0.7) {
                this.createSparkle(e.clientX, e.clientY);
                this.lastSparkle = now;
            }
        },

        handleClick(e) {
            // Explosão de corações no clique!
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    this.createClickHeart(e.clientX, e.clientY);
                }, i * 50);
            }
        },

        createSparkle(x, y) {
            const sparkle = document.createElement('div');
            const emoji = CONFIG.particles.sparkleEmojis[
                Math.floor(Math.random() * CONFIG.particles.sparkleEmojis.length)
            ];
            
            sparkle.textContent = emoji;
            sparkle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                font-size: 1rem;
                pointer-events: none;
                z-index: 9999;
            `;
            
            document.body.appendChild(sparkle);

            const angle = Math.random() * Math.PI * 2;
            const distance = 20 + Math.random() * 30;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;

            sparkle.animate([
                { opacity: 1, transform: 'scale(1) translate(0, 0)' },
                { opacity: 0, transform: `scale(0) translate(${endX}px, ${endY}px)` }
            ], {
                duration: 600,
                easing: 'ease-out'
            }).onfinish = () => sparkle.remove();
        },

        createClickHeart(x, y) {
            const heart = document.createElement('div');
            heart.textContent = CONFIG.particles.heartEmojis[
                Math.floor(Math.random() * CONFIG.particles.heartEmojis.length)
            ];
            
            heart.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                font-size: ${1 + Math.random()}rem;
                pointer-events: none;
                z-index: 9999;
            `;
            
            document.body.appendChild(heart);

            const angle = Math.random() * Math.PI * 2;
            const distance = 50 + Math.random() * 100;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;

            heart.animate([
                { opacity: 1, transform: 'scale(0) translate(0, 0) rotate(0deg)' },
                { opacity: 1, transform: `scale(1.2) translate(${endX * 0.5}px, ${endY * 0.5}px) rotate(180deg)` },
                { opacity: 0, transform: `scale(0.5) translate(${endX}px, ${endY}px) rotate(360deg)` }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }).onfinish = () => heart.remove();
        }
    };

    // ==========================================================================
    // Módulo: Interactive Card
    // ==========================================================================
    const CardInteractionModule = {
        card: null,

        init() {
            this.card = document.querySelector('.couple-card');
            if (!this.card || 'ontouchstart' in window) return;

            this.card.addEventListener('mousemove', this.handleMouseMove.bind(this));
            this.card.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
        },

        handleMouseMove(e) {
            const rect = this.card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;

            this.card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            this.card.style.transition = 'transform 0.1s ease-out';
        },

        handleMouseLeave() {
            this.card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            this.card.style.transition = 'transform 0.5s ease-out';
        }
    };

    // ==========================================================================
    // Módulo: Floating Side Decorations (Pandas nas laterais)
    // ==========================================================================
    const SideDecorationsModule = {
        init() {
            this.createSidePandas();
        },

        createSidePandas() {
            // Panda esquerdo
            const leftPanda = this.createBouncingPanda('left');
            document.body.appendChild(leftPanda);

            // Panda direito
            const rightPanda = this.createBouncingPanda('right');
            document.body.appendChild(rightPanda);
        },

        createBouncingPanda(side) {
            const container = document.createElement('div');
            container.innerHTML = '🐼';
            
            const isLeft = side === 'left';
            container.style.cssText = `
                position: fixed;
                ${isLeft ? 'left: 20px' : 'right: 20px'};
                bottom: 20px;
                font-size: 3rem;
                z-index: 100;
                cursor: pointer;
                filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3));
                transition: transform 0.3s ease;
            `;

            // Animação de bounce
            container.animate([
                { transform: 'translateY(0) rotate(-5deg)' },
                { transform: 'translateY(-15px) rotate(5deg)' },
                { transform: 'translateY(0) rotate(-5deg)' }
            ], {
                duration: 2000,
                easing: 'ease-in-out',
                iterations: Infinity,
                delay: isLeft ? 0 : 500
            });

            // Interação ao passar o mouse
            container.addEventListener('mouseenter', () => {
                container.style.transform = 'scale(1.3)';
            });
            container.addEventListener('mouseleave', () => {
                container.style.transform = 'scale(1)';
            });

            // Criar corações ao clicar
            container.addEventListener('click', () => {
                const rect = container.getBoundingClientRect();
                for (let i = 0; i < 10; i++) {
                    setTimeout(() => {
                        CursorTrailModule.createClickHeart(
                            rect.left + rect.width / 2,
                            rect.top + rect.height / 2
                        );
                    }, i * 80);
                }
            });

            return container;
        }
    };

    // ==========================================================================
    // Módulo: Floating Hearts Ring (Anel de corações ao redor do card)
    // ==========================================================================
    const HeartsRingModule = {
        init() {
            const card = document.querySelector('.couple-card');
            if (!card) return;

            this.createOrbitingHearts(card);
        },

        createOrbitingHearts(card) {
            const heartsContainer = document.createElement('div');
            heartsContainer.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 1;
            `;

            const hearts = ['💕', '💗', '💖', '💝', '💓', '💞'];
            const numHearts = 6;

            for (let i = 0; i < numHearts; i++) {
                const heart = document.createElement('div');
                heart.textContent = hearts[i];
                heart.style.cssText = `
                    position: absolute;
                    font-size: 1.5rem;
                    opacity: 0.7;
                `;

                heartsContainer.appendChild(heart);

                // Órbita individual
                const angle = (i / numHearts) * Math.PI * 2;
                const radius = 180;
                const duration = 15 + Math.random() * 5;

                heart.animate([
                    { transform: `rotate(${angle}rad) translateX(${radius}px) rotate(-${angle}rad)` },
                    { transform: `rotate(${angle + Math.PI * 2}rad) translateX(${radius}px) rotate(-${angle + Math.PI * 2}rad)` }
                ], {
                    duration: duration * 1000,
                    easing: 'linear',
                    iterations: Infinity
                });
            }

            card.parentElement.appendChild(heartsContainer);
        }
    };

    // ==========================================================================
    // Módulo: Lightbox (Ampliar imagem do casal)
    // ==========================================================================
    const LightboxModule = {
        lightbox: null,
        coupleImage: null,
        closeBtn: null,
        backdrop: null,

        init() {
            this.lightbox = document.getElementById('lightbox');
            this.coupleImage = document.querySelector('.couple-image');
            this.closeBtn = document.querySelector('.lightbox__close');
            this.backdrop = document.querySelector('.lightbox__backdrop');

            if (!this.lightbox || !this.coupleImage) return;

            // Abrir lightbox ao clicar na imagem
            this.coupleImage.addEventListener('click', this.open.bind(this));

            // Fechar lightbox
            this.closeBtn?.addEventListener('click', this.close.bind(this));
            this.backdrop?.addEventListener('click', this.close.bind(this));

            // Fechar com ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.lightbox.classList.contains('lightbox--active')) {
                    this.close();
                }
            });
        },

        open() {
            this.lightbox.classList.add('lightbox--active');
            document.body.style.overflow = 'hidden';
            
            // Criar explosão de corações ao abrir
            const rect = this.coupleImage.getBoundingClientRect();
            for (let i = 0; i < 12; i++) {
                setTimeout(() => {
                    CursorTrailModule.createClickHeart(
                        rect.left + rect.width / 2,
                        rect.top + rect.height / 2
                    );
                }, i * 60);
            }
        },

        close() {
            this.lightbox.classList.remove('lightbox--active');
            document.body.style.overflow = '';
        }
    };

    // ==========================================================================
    // Módulo: Language Selector (Seletor de idioma)
    // ==========================================================================
    const LanguageModule = {
        currentLang: 'pt',
        buttons: null,

        // Traduções
        translations: {
            pt: {
                quote: '"Juntos, para sempre"',
                badge: 'Amor eterno'
            },
            vi: {
                quote: '"Mãi mãi bên nhau"',
                badge: 'Tình yêu vĩnh cửu'
            }
        },

        init() {
            this.buttons = document.querySelectorAll('.lang-selector__btn');
            if (!this.buttons.length) return;

            // Detectar idioma do navegador
            this.detectBrowserLanguage();

            // Adicionar eventos de clique
            this.buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const lang = btn.dataset.lang;
                    this.setLanguage(lang);
                });
            });

            // Aplicar idioma inicial
            this.setLanguage(this.currentLang);
        },

        detectBrowserLanguage() {
            const browserLang = navigator.language || navigator.userLanguage;
            
            // Verificar se é vietnamita
            if (browserLang.startsWith('vi')) {
                this.currentLang = 'vi';
            } 
            // Verificar se é português
            else if (browserLang.startsWith('pt')) {
                this.currentLang = 'pt';
            }
            // Padrão: português
            else {
                this.currentLang = 'pt';
            }
        },

        setLanguage(lang) {
            this.currentLang = lang;

            // Atualizar botões ativos
            this.buttons.forEach(btn => {
                if (btn.dataset.lang === lang) {
                    btn.classList.add('lang-selector__btn--active');
                } else {
                    btn.classList.remove('lang-selector__btn--active');
                }
            });

            // Atualizar textos
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.dataset.i18n;
                if (this.translations[lang] && this.translations[lang][key]) {
                    el.textContent = this.translations[lang][key];
                }
            });

            // Atualizar atributo lang do HTML
            document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'vi';

            // Criar efeito visual na troca
            this.createSwitchEffect();
        },

        createSwitchEffect() {
            // Pequena explosão de corações na troca de idioma
            const selector = document.querySelector('.lang-selector');
            if (selector) {
                const rect = selector.getBoundingClientRect();
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        CursorTrailModule.createClickHeart(
                            rect.left + rect.width / 2,
                            rect.top + rect.height / 2
                        );
                    }, i * 50);
                }
            }
        }
    };

    // ==========================================================================
    // Inicialização
    // ==========================================================================
    function init() {
        ParticlesModule.init();
        CursorTrailModule.init();
        CardInteractionModule.init();
        SideDecorationsModule.init();
        HeartsRingModule.init();
        LightboxModule.init();
        LanguageModule.init();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
