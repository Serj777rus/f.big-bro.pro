<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="hero_div">
        <video src="../assets/video.mp4" autoplay muted loop></video>
        <div class="hero_main_div">
            <div class="header">
                <img src="../assets/Лого-Big-Bro-Черный_Белый.png">
            </div>
            <div class="main_div">
                <h1>ФРАНШИЗА БАРБЕРШОПОВ <br><span>"BIG BRO"</span></h1>
                <h3>#ТО ЧТО ТЫ ХОТЕЛ</h3>
            </div>
            <div class="main_utp">
                <p>Стань частью BIG BRO и ты получишь:</p>
                <div class="utp_div">
                    <div class="utp" v-for="utp in utp" :key="utp.id">
                        <h2>{{ utp.text }}</h2>
                    </div>
                </div>
            </div>
            <Button><slot>Узнать подробнее</slot></Button>
        </div>
    </div>
    <div class="cifr_div">
        <div class="cifr_main_block">
            <div class="cifr">
                <span>4</span>
                <p>Страны</p>
            </div>
            <div class="cifr">
                <span>55</span>
                <p>Городов</p>
            </div>
            <div class="cifr">
                <span>63</span>
                <p>Барбершопа</p>
            </div>
        </div>
    </div>
    <div class="maps_div">
        <div class="maps_main_div">
            <img src="../assets/map.webp">
            <div class="map_form">
                <p>Узнай, свободен ли твой город?</p>
                <form @submit.prevent="sendForm">
                    <input v-model="form.name" type="text" name="name" id="name" placeholder="Имя">
                    <input v-model="form.phone" type="text" name="phone" id="phone" placeholder="Телефон">
                    <input v-model="form.city" type="text" name="city" id="city" placeholder="Город">
                    <Button><slot>Проверить</slot></Button>
                </form>
            </div>
        </div>
    </div>
    <div class="minicalc">
        <div class="minicalc_div">
            <div class="picture">
                <p>10 лет на рынке</p>
            </div>
            <div class="calc">
                <div class="tabs">
                    <div class="tab">
                        <p :class="{active: calc.money == 1}" @click="calc.money = 1">Выручка</p>
                        <p :class="{active: calc.money == 0.3}" @click="calc.money = 0.3">Прибыль</p>
                    </div>
                    <div class="tab">
                        <p :class="{active: calc.period == 1}" @click="calc.period = 1">Месяц</p>
                        <p :class="{active: calc.period == 12}" @click="calc.period = 12">Год</p>
                    </div>
                </div>
                <div class="calc_value">
                    <p>*Средний показатель сети</p>
                    <span>{{ calc.value }}р</span>
                </div>
            </div>
            <div class="big_btn">
                <p>Получить<br>финансовую модель</p>
                <Button><slot>Получить фин модель</slot></Button>
            </div>
        </div>
    </div>
    <div class="calc_big">
        <div class="calc_big_div">
            <p>Калькулятор доходности</p>
            <div class="big_calc_tabs_value">
                <div class="big_calc_tabs">
                    <div class="big_calc_tab">
                        <p>Количество кресел</p>
                        <div class="click_tab">
                            <img @click="chooseChair(1)" :class="{activecalc: bigCalc.chairs >= 1}" class="barber_chair" src="../assets/free-icon-barber-chair-5057319.png">
                            <img @click="chooseChair(2)" class="barber_chair" src="../assets/free-icon-barber-chair-5057319.png">
                            <img @click="chooseChair(3)" class="barber_chair" src="../assets/free-icon-barber-chair-5057319.png">
                            <img @click="chooseChair(4)" class="barber_chair" src="../assets/free-icon-barber-chair-5057319.png">
                            <img @click="chooseChair(5)" class="barber_chair" src="../assets/free-icon-barber-chair-5057319.png">
                            <img @click="chooseChair(6)" class="barber_chair" src="../assets/free-icon-barber-chair-5057319.png">
                        </div>
                    </div>
                    <div class="big_calc_tab">
                        <p>Стоимость м2 аренды</p>
                        <div class="click_tab">
                            <input type="range" min="700" max="2000" step="50" value="1000" @input="updateRentValue">
                            <p>{{ bigCalc.rent }}</p>
                        </div>
                    </div>
                    <div class="big_calc_tab">
                        <p>Цена стрижки</p>
                        <div class="click_tab">
                            <input type="range" min="800" max="2500" step="50" value="1000" @input="updateValue">
                            <p>{{ bigCalc.cut }}</p>
                        </div>
                    </div>
                    <div class="calc_tabs_desk">
                        <p>*расчеты основаны на средней выручки точек сети и являются предварительными. Не являются публичной офертой</p>
                    </div>
                </div>
                <div class="big_calc_values">
                    <div class="values_and_pictire">
                        <div class="values">
                            <div class="big_calc_value_viruchka">Выручка: <span>{{ bigCalc.valueBrutto }}р</span></div>
                            <div class="big_calc_value_viruchka">Прибыль: <span>{{ bigCalc.valueNetto }}р</span></div>
                        </div>
                        <img src="../assets/calc.png">
                    </div>
                    <div class="form_big_calc">
                        <div class="form_text_btn">
                            <p>Оставь заявку и получи бизнес план для своего города</p>
                            <Button form="calc_form"><slot>Получить план</slot></Button>
                        </div>
                        <form id="calc_form" @submit.prevent="sendForm">
                            <input type="text" name="name" placeholder="Имя">
                            <input type="text" name="phone" placeholder="Телефон">
                            <input type="text" name="city" placeholder="Город">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from './ui_components/Button.vue';
    export default {
        components: {
            Button
        },
        data() {
            return {
                utp: [
                    {
                        id: 1,
                        text: `Прибыль от 300 000р/месяц`
                    },
                    {
                        id: 2,
                        text: `Окупаемость от 12 месяцев`
                    },
                    {
                        id: 3,
                        text: `Запуск от 30 дней`
                    },
                    {
                        id: 4,
                        text: `Средняя выручка от 1 000 000р`
                    }
                ],
                form: {
                    name: '',
                    phone: '',
                    city: ''
                },
                calc: {
                    money: 1,
                    period: 1,
                    value: ''
                },
                bigCalc: {
                    cut: '',
                    rent: '',
                    chairs: '',
                    valueBrutto: '',
                    valueNetto: ''
                }
            }
        },
        watch: {
            calc: {
                handler(newValue) {
                    if (newValue) {
                        this.calc.value = (1560 * 650 * this.calc.money) * this.calc.period;
                    }
                },
                deep: true
            },
            bigCalc: {
                handler(newValue) {
                    if (newValue) {
                        this.bigCalc.valueBrutto = Math.round((this.bigCalc.cut * 1.1) * (this.bigCalc.chairs * 10 * 0.6)) * 30.5
                        this.bigCalc.valueNetto = Math.round(this.bigCalc.valueBrutto - (this.bigCalc.valueBrutto / 100 * 50) - (this.bigCalc.rent * 65) - (this.bigCalc.valueBrutto / 100 * 10))
                    }
                },
                deep: true
            }
        },
        methods: {
            updateValue(event) {
                this.bigCalc.cut = event.target.value
            },
            updateRentValue(event) {
                this.bigCalc.rent = event.target.value
            },
            chooseChair(value) {
                this.bigCalc.chairs = value
                let arrClass = document.querySelectorAll('.barber_chair');
                arrClass.forEach(el => {
                    el.classList.remove('activecalc')
                })
                for (let i = 0; i < value; i++) {
                    arrClass[i].classList.add('activecalc')
                }
            }
        },
        mounted() {
            this.calc.value = (1560 * 650 * this.calc.money) * this.calc.period;
            this.bigCalc.cut = 1000
            this.bigCalc.rent = 700
            this.bigCalc.chairs = 1
        }
    }
</script>

<style scoped>
.hero_div {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 40px 0px;
    box-sizing: border-box;
}
.hero_div video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit:cover;
    z-index: -1;
}
.hero_main_div {
    display: flex;
    width: 1200px;
    flex-direction: column;
    gap: 96px;
}
.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    /* margin-top: 48px; */
}
.header img {
    width: 160px;
    object-fit: contain;
}
.main_div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.main_div h1 {
    font-size: 64px;
    color: #fff;
    line-height: 100%;
    font-weight: 900;
}
.main_div span {
    font-size: 92px;
}
.main_div h3 {
    font-size: 96px;
    color: #DFB700;
    transform: rotate(-5deg);
    line-height: 0;
}
.main_utp {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.main_utp p {
    font-size: 48px;
    color: #fff;
    font-weight: 700;
}
.utp_div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.utp {
    width: 200px;
    padding: 12px 32px;
    background: #191111;
    border: 1px solid #4e4e4e;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.utp h2 {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    text-align: center;
}
@media all and (max-width: 440px) {
    .hero_div {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 40px 10px;
}
.hero_div video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit:cover;
    z-index: -1;
}
.hero_main_div {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 64px;
}
.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
}
.header img {
    width: 120px;
    object-fit: contain;
}
.main_div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.main_div h1 {
    font-size: 40px;
    color: #fff;
    line-height: 120%;
    font-weight: 900;
}
.main_div span {
    font-size: 64px;
}
.main_div h3 {
    font-size: 64px;
    color: #DFB700;
    transform: rotate(-5deg);
    line-height: 100%;
}
.main_utp {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.main_utp p {
    font-size: 24px;
    color: #fff;
    font-weight: 700;
}
.utp_div {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 8px;
}
.utp {
    width: 200px;
    padding: 12px 32px;
    background: #191111;
    border: 1px solid #4e4e4e;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.utp h2 {
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    text-align: center;
}
}
.cifr_div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
}
.cifr_main_block {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.cifr {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
}
.cifr span {
    font-size: 96px;
    font-weight: 900;
    color: #DFB700;
    line-height: 100%;
}
.cifr p {
    font-size: 48px;
    font-weight: 700;
    color: #333;
}
@media all and (max-width: 440px) {
    .cifr_main_block {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.cifr p {
    font-size: 32px;
    font-weight: 700;
}
.cifr span {
    font-size: 96px;
}
}
.maps_div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
    background: url(../assets/Фон\ Big\ Bro.jpg);
}
.maps_main_div {
    width: 1200px;
    display: flex;
    flex-direction: row;
    gap: 32px;
}
.maps_main_div img {
    width: calc(50% - 16px);
    object-fit: contain;
}
.map_form {
    width: calc(50% - 16px);
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.map_form p {
    font-size: 64px;
    color: #fff;
    line-height: 100%;
    font-weight: 800;
}
.map_form form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-sizing: border-box;
    border-radius: 12px;
}
.map_form form input {
    padding: 8px 12px;
    border-bottom: 2px solid #DFB700;
    border-right: none;
    border-top: none;
    border-left: none;
    border-radius: 4px;
    background: transparent;
    color: #fff;
}
.map_form form input::placeholder {
    color: #fff;
}
@media all and (max-width: 440px) {
    .maps_div {
        padding: 40px 10px;
        box-sizing: border-box;
    }
    .maps_main_div {
        width: 100%;
        flex-direction: column;
    }
    .maps_main_div img {
        width: 100%;
    }
    .map_form {
        width: 100%;
        gap: 16px
    }
    .map_form p {
        font-size: 48px;
    }
}
.minicalc {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
}
.minicalc_div {
    width: 1200px;
    display: flex;
    flex-direction: row;
    gap: 16px;
}
.picture {
    width: calc(100%/3 - 16px);
    height: 280px;
    border-radius: 32px;
    position: relative;
    background: url(../assets/IMG_3514.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, .25);
}
.picture p {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    box-sizing: border-box;
    padding: 12px 32px;
    border-radius: 32px;
    background: #DFB700;
}
.calc {
    width: calc(100%/3 - 16px);
    padding: 24px;
    box-sizing: border-box;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, .25);
    border-radius: 32px;
}
.tabs {
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-sizing: border-box;
}
.tab {
    padding: 8px 12px;
    display: flex;
    flex-direction: row;
    border-radius: 32px;
    background: #DFB700;
    width: fit-content;
}
.tab p {
    padding: 8px 12px;
    line-height: 100%;
    cursor: pointer;
}
.active {
    background: #333;
    color: #fff;
    border-radius: 24px;
}
.calc_value {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.calc_value span {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
}
.calc_value p {
    font-size: 16px;
    font-weight: 400;
    color: #333;
}
.big_btn {
    width: calc(100%/3 - 16px);
    height: 280px;
    box-sizing: border-box;
    border-radius: 32px;
    padding: 24px;
    background: linear-gradient(-45deg, rgba(233, 183, 0, 1), rgba(51, 51, 51, 1));
    box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, .25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
}
.big_btn p {
    color: #fff;
    text-align: center;
    font-size: 32px;
}
@media all and (max-width: 440px) {
    .minicalc {
        padding: 40px 10px;
    }
    .minicalc_div {
        width: 100%;
        flex-direction: column;
        gap: 32px;
    }
    .picture, .calc, .big_btn {
        width: 100%;
    }
}
.calc_big {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
    background: #333;
    color: #fff;
}
.calc_big_div {
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 80px;
}
.calc_big_div p {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
}
.big_calc_tabs_value {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 32px;
}
.big_calc_tabs {
    width: calc(50% - 16px);
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.big_calc_tab {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-sizing: border-box;
}
.big_calc_tab p {
    font-size: 24px;
    font-weight: 400;
}
.click_tab {
    width: 100%;
    border: 1px solid #DFB700;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 8px;
    gap: 16px;
}
.click_tab input {
    width: 100%;
}
.barber_chair {
    width: 80px;
    object-fit: contain;
    box-sizing: border-box;
    padding: 4px;
    border: 1px solid #DFB700;
    border-radius: 12px;
    cursor: pointer;
}
.barber_chair:hover {
    background: #DFB700;
}
.activecalc {
    background: #DFB700;
}
.calc_tabs_desk {
    width: 100%;
}
.calc_tabs_desk p {
    font-size: 12px;
    font-weight: 300;
}
.big_calc_values {
    display: flex;
    width: calc(50% - 16px);
    flex-direction: column;
    gap: 32px;
}
.values_and_pictire {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
}
.values {
    width: calc(50% - 8px);
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-sizing: border-box;
}
.big_calc_value_viruchka {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    border-radius: 24px;
    border: 1px solid #DFB700;
    font-size: 18px;
}
.big_calc_value_viruchka span {
    font-size: 48px;
    color: #DFB700;
    font-weight: 900;
}
.values img {
    width: calc(50% - 8px);
    object-fit: contain;
    display: flex;
}
.form_big_calc {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
}
.form_text_btn {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
}
.form_text_btn p {
    font-size: 24px;
}
.form_big_calc form {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.form_big_calc form input {
    padding: 8px 12px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #DFB700 !important;
    color: #fff;
}
.form_big_calc form input::placeholder {
    color: #fff;
}
@media all and (max-width: 440px) {
    .calc_big {
        padding: 40px 10px;
    }
    .calc_big_div {
        width: 100%;
        gap: 32px;
    }
    .calc_big_div p {
        font-size: 32px;
        text-align: center;
    }
    .big_calc_tabs_value {
        flex-direction: column;
    }
    .big_calc_tabs {
        width: 100%;
        gap: 16px;
    }
    .big_calc_tab p {
        font-size: 24px;
    }
    .click_tab {
        justify-content: space-between;
        gap: 0
    }
    .click_tab img {
        width: 48px;
    }
    .calc_tabs_desk p {
    font-size: 12px;
    font-weight: 300;
    }
    .big_calc_values {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 16px;
}
.values_and_pictire {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
}
.values {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-sizing: border-box;
}
.big_calc_value_viruchka {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    border-radius: 24px;
    border: 1px solid #DFB700;
    font-size: 18px;
    display: flex;
    align-items: center;
}
.big_calc_value_viruchka span {
    font-size: 48px;
    color: #DFB700;
    font-weight: 900;
}
.values_and_pictire img {
    display: none;
}
.form_big_calc {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.form_text_btn {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
}
.form_text_btn p {
    font-size: 24px;
}
.form_big_calc form {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.form_big_calc form input {
    padding: 8px 12px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #DFB700 !important;
    color: #fff;
}
.form_big_calc form input::placeholder {
    color: #fff;
}
}
</style>