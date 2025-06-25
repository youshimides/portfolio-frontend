import '../styles/Home.css'
import { useEffect } from 'react';

function Home() {
  // Инициализация анимаций при загрузке компонента
  useEffect(() => {
    const initScrollAnimations = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });

      document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
      });
    };

    initScrollAnimations();
    
    // Переинициализация при изменении размера окна
    const handleResize = () => initScrollAnimations();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="fade-in">Lynn vision portfolio</h1>
      
      <div className="profiles-container fade-in">
        {/* Профиль 1 */}
        <div className="profile fade-in" style={{ transitionDelay: '0.1s' }}>
          <div className="photo-placeholder">
            <img src="img/glebi.jpg" alt="Хамитов Глеб" />
          </div>
          <p className="caption">Хамитов Глеб</p>
        </div>
        
        {/* Профиль 2 */}
        <div className="profile fade-in" style={{ transitionDelay: '0.3s' }}>
          <div className="photo-placeholder">
            <img src="img/арсе.jpg" alt="Подарванов Арсений" />
          </div>
          <p className="caption">Подарванов Арсений</p>
        </div>
        
        {/* Профиль 3 */}
        <div className="profile fade-in" style={{ transitionDelay: '0.5s' }}>
          <div className="photo-placeholder">
            <img src="img/sutyagin.jpg" alt="Сутягин Максим" />
          </div>
          <p className="caption">Сутягин Максим</p>
        </div>
      </div>
    </div>
  )
}

export default Home