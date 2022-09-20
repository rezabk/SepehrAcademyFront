import "./SectionE.css";

const SectionE = () => {
    return (
        <div className="teachers  d-felx justify-content-center">
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" class="card card-item bahr-card" >
                <img src={'https://sepehracademy-storage.storage.iran.liara.space/Teachers/bahr2.jpg'} class="card-img-top" alt="..." />
                <div class="card-body ">
                    <h5 class="card-title bahr-title">دکتر بحرالعلومی</h5>
                    <p class="card-text bahr-text">برنامه نویس وب</p>

                </div>
            </div>

            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" class="card card-item nazari-card" >
                <img src={'https://sepehracademy-storage.storage.iran.liara.space/Teachers/nazari.jpg'} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title nazari-title">مهندس نظری</h5>
                    <p class="card-text nazari-text">دیزاینر وب</p>

                </div>
            </div>

            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" class="card card-item salar-card">
                <img src={'https://sepehracademy-storage.storage.iran.liara.space/Teachers/salar.jpg'} class="card-img-top" alt="..." />
                <div class="card-body ">
                    <h5 class="card-title salar-title">سالار نیلی</h5>
                    <p class="card-text salar-text">مدرس ریکت</p>

                </div>
            </div>
        </div>


    );
}

export default SectionE;


