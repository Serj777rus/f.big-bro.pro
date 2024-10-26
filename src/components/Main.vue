<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="hero_div">
        <video src="../assets/video.mp4" autoplay muted loop playsinline webkit-playinginline></video>
        <div class="hero_main_div">
            <div class="header">
                <img src="../assets/logo-big-bro-black-white.png">
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
            <Button @click="openPop"><slot>Узнать подробнее</slot></Button>
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
                    <MaskInput v-model="form.phone" mask="# (###) ### ## ##" type="text" name="phone" id="phone" placeholder="Телефон" />
                    <input v-model="form.city" type="text" name="city" id="city" placeholder="Город">
                    <div v-show="message !== ''" style="align-self: center; line-height: 100%; font-size: 24px; color: #DFB700;">{{ message }}</div>
                    <Button type="submit" :disabled="!form.name || !form.phone || !form.city" @click="trackGoal"><slot>Проверить</slot></Button>
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
                        <p :class="{active: calc.money === 1}" @click="calc.money = 1">Выручка</p>
                        <p :class="{active: calc.money === 0.3}" @click="calc.money = 0.3">Прибыль</p>
                    </div>
                    <div class="tab">
                        <p :class="{active: calc.period === 1}" @click="calc.period = 1">Месяц</p>
                        <p :class="{active: calc.period === 12}" @click="calc.period = 12">Год</p>
                    </div>
                </div>
                <div class="calc_value">
                    <p>*Средний показатель сети</p>
                    <span>{{ calc.value }}р</span>
                </div>
            </div>
            <div class="big_btn">
                <p>Получить<br>финансовую модель</p>
                <Button @click="openPop"><slot>Получить фин модель</slot></Button>
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
                            <div v-show="message !== ''" style="align-self: center; line-height: 100%; font-size: 24px; color: #DFB700;">{{ message }}</div>
                            <Button :disabled="!form.name || !form.phone || !form.city" type="submit" form="calc_form" @click="trackGoal"><slot>Получить план</slot></Button>
                        </div>
                        <form id="calc_form" @submit.prevent="sendForm">
                            <input v-model="form.name" type="text" name="name" placeholder="Имя">
                            <MaskInput mask="# (###) ### ## ##" v-model="form.phone" type="text" name="phone" placeholder="Телефон" />
                            <input v-model="form.city" type="text" name="city" placeholder="Город">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="why_we">
        <div class="why_we_main">
            <h4>Почему мы?</h4>
            <div class="why_we_cards">
                <div class="why_we_card">
                    <h3>Сильное коммьнити</h3>
                    <p>Более 70 человек в общем чате наших партнеров, готовых прийти на помощь в любое время</p>
                <img src="../assets/phone.png">
                </div>
                <div class="why_we_card">
                    <h3>Надежные подрядчики</h3>
                    <p>На любой ваш запрос - у нас есть собственный сотрудник или надежный подрядчик</p>
                    <img src="../assets/head.png">
                </div>
                <div class="why_we_card">
                    <h3>Обучения и еще обучения</h3>
                    <p>Обучающие материалы, онлайн конференции, очные мастермайнды для партнеров и мастеров</p>
                    <img src="../assets/books.png">
                </div>
            </div>
        </div>
    </div>
    <div class="steps_launch">
        <div class="steps_launch_main">
            <h3>Этапы открытия</h3>
            <p>На каждом этапе Вас будет сопровождать опытный менеджер отдела “Запуска”</p>
            <div class="steps">
                <div class="step" v-for="step in steps" :key="step.id">
                    <h3>{{ step.title }}</h3>
                    <p>{{ step.description }}</p>
                    <img :src="step.image">
                    <div class="number_step">{{ step.id }}</div>
                </div>
            </div>
            <Button @click="openPop"><slot>Получить план открытия</slot></Button>
        </div>
    </div>
    <div class="photos">
        <div class="photos_main">
            <p>Как будет выглядеть ваш BIG BRO</p>
            <div class="another_photo">
                <img class="big_photo" v-for="photo in photos" :key="photo.id" :src="photo.image" :class="{activeimage: activephoto === photo.id}">
                <div class="all_photos">
                    <img class="thumb_photo" v-for="photo in photos" :key="photo.id" :src="photo.image" @click="changePhoto(photo.id)">
                </div>
            </div>
        </div>
    </div>
    <div class="partners">
        <div class="partners_main">
            <p>BIG BRO в цифрах</p>
            <div class="partners_div">
                <div class="partner_card" v-for="partner in partners" :key="partner.id">
                    <div class="avatar_data">
                        <img :src="partner.avatar">
                        <div class="datas">
                            <p>{{ partner.name }}</p>
                            <h6>г. {{ partner.city }}</h6>
                            <h6>количество точек: <span>{{ partner.shops }}</span></h6>
                            <h6>Средняя выручка: <span>{{ partner.money }}</span></h6>
                        </div>
                    </div>
                    <img :src="partner.image">
                </div>
            </div>
        </div>
    </div>
    <div class="chek_launch">
        <div class="chek_launch_main">
            <p>Сколько стоит открыть BIG BRO:</p>
            <div class="chech">
                <h2>Мужская парикмахерская<br>"BIG BRO"</h2>
                <span>ЧЕК НА ОТКРЫТИЕ</span>
                <div class="disclaimer">
                     <img src="../assets/stars.svg">
                    <h6>*Цены на открытие указаны исходя из статистики средней стоимости открытия барбершопов "BIG BRO" в 2023 и 2024 годах</h6>
                    <img src="../assets/stars.svg">
                </div>
                <div class="check_values">
                    <div class="check_value"><p>Затраты на ремонт</p><span>400 000р</span></div>
                    <div class="check_value"><p>Мебель и оборудование</p><span>1 100 000р</span></div>
                    <div class="check_value"><p>Паушальный взнос</p><span>500 000р</span></div>
                    <div class="check_value"><p>Стартовый маркетинг</p><span>200 000р</span></div>
                    <div class="check_value"><p>Резервный взнос</p><span>600 000р</span></div>
                </div>
                <div class="disclaimer">
                    <img src="../assets/lines.svg">
                    <div class="vlaue_div"><h2>ИТОГО:</h2><span>2 800 000р</span></div>
                    <div class="vlaue_div"><h3>Окупаемость:</h3><span>18 месяцев</span></div>
                    <img src="../assets/lines.svg">
                </div>
                <Button @click="openPop"><slot>Купить франшизу</slot></Button>
            </div>
        </div>
    </div>
    <div class="gift">
        <div class="gift_main">
            <div class="left_side_gift">
                <h3>Дарим подарки!</h3>
                <p>При покупке франшизы дарим в подарок стартовый набор косметики на</p>
                <span>50 000р</span>
                <Button @click="openPop"><slot>Хочу подарок</slot></Button>
            </div>
            <div class="right_side_gift">
                <img src="../assets/cosmetics.jpg">
                <img src="../assets/cosmetics2.jpg">
            </div>
        </div>
    </div>
    <div class="what_else">
        <div class="what_else_main">
            <p>Что еще?</p>
            <span>Покупая франшизу - вы приобретаете не только имя</span>
            <div class="what_else_cards">
                <div class="what_else_card">
                    <div class="what_else_card_text">
                        <h3>Онлайн<br>Академия</h3>
                        <h4>Доступ к обучающим материалам для барберов, администраторов и управляющих из любой точки 24/7</h4>
                    </div>
                    <img src="../assets/education.png">
                </div>
                <div class="what_else_card">
                    <div class="what_else_card_text">
                        <h3>Сильное<br>коммьюнити</h3>
                        <h4>Доступ к общему чату партнеров, которые придут на помощь в любое время дня и ночи, что бы помочь Вам</h4>
                    </div>
                    <img src="../assets/comunity.png">
                </div>
                <div class="what_else_card">
                    <div class="what_else_card_text">
                        <h3>Аналитическая<br>система</h3>
                        <h4>Дашборды собственной разработки, которые помогут Вам максимально глубоко проанализировать вашу деятельность</h4>
                    </div>
                    <img src="../assets/dashboard.png">
                </div>
                <div class="what_else_card">
                    <div class="what_else_card_text">
                        <h3>Мастермайнды<br>и слеты</h3>
                        <h4>Участие в мастермайндах и слетах партнеров для обмена накопленным опытом и знаниями</h4>
                    </div>
                    <img src="../assets/mm.png">
                </div>
            </div>
        </div>
    </div>
    <div class="come_to_bb">
        <div class="come_to_bb_main">
            <p>Уже есть барбершоп?</p>
            <div class="come_to_bb_card">
                <div class="left_sode_card">
                    <h3>Присоединяйся к BIG BRO<br>на выгодных условиях</h3>
                    <h4>Для тех кто готов встать под крыло сильного бренда и пробить потолок - мы предлагаем льготные условия для присоединения к нашему братсву</h4>
                </div>
                <div class="right_side_card">
                    <div class="card_uslovie">
                        <p>Паушальный взнос</p>
                        <span>400 000р</span>
                    </div>
                    <div class="card_uslovie">
                        <p>Ребрендинг</p>
                        <span>в течении 1 года</span>
                    </div>
                    <div class="card_uslovie">
                        <p>Фиксированный роялти</p>
                        <span>15 000р/месяц</span>
                    </div>
                    <Button @click="openPop"><slot>Вступить в братство</slot></Button>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer_main">
            <p>Остались вопросы?</p>
            <span>Напиши директору сети BIG BRO или оставь контакты и мы свяжемся</span>
            <div class="footer_content">
                <div class="footer_right_side">
                    <img src="../assets/general.png">
                    <div class="socials">
                        <p>Горбачев Сергей</p>
                        <div class="socials_link">
                            <a href="https://t.me/S_V_Gorbachev"><img src="../assets/tg.png"></a>
                            <a href="https://wa.me/79114682801"><img src="../assets/wa.png"></a>
                            <a href="https://t.me/S_V_Gorbachev"><img src="../assets/vk.png"></a>
                        </div>
                    </div>
                </div>
                <div class="footer_left_side">
                    <form @submit.prevent="sendForm">
                        <input v-model="form.name" type="text" name="name" id="name" placeholder="Имя">
                        <MaskInput v-model="form.phone" mask="# (###) ### ## ##" type="text" name="phone" id="phone" placeholder="Телефон" />
                        <input v-model="form.city" type="text" name="city" id="city" placeholder="Город">
                        <div v-show="message !== ''" style="align-self: center; line-height: 100%; font-size: 24px; color: #DFB700;">{{ message }}</div>
                        <Button :disabled="!form.name || !form.phone || !form.city" type="submit" @click="trackGoal"><slot>Отправить</slot></Button>
                    </form>
                </div>
            </div>
            <div class="logo_polici">
                <img src="../assets/logo-big-bro-black-white.png">
                <a href="https://drive.google.com/file/d/1J6YS_PAZNyLBtfDBQTrulKC0iuC6eL9q/view" target="_blank"><p>Политика конфиденциальности</p></a>
            </div>
        </div>
    </div>
    <PopUp @sendPopForm="fetchingPopUpData" :isOpen="isShowPop" @closePop="closePopUp"></PopUp>
    <PopUpTwo :isOpenTime="isShowPopTime" @closePopTime="closePopTime" @sendPopForm="fetchingPopUpData"></PopUpTwo>
    <div class="thankPop" v-show="thankPop">
        <div class="thankPop_main">
            <div class="text_thankPop">
                <p>СПАСИБО, BRO!</p>
                <span>Твои данные отправлены и в ближайшее время мы с тобой свяжемся</span>
                <h4>А пока подпишись на наши соц сети</h4>
            </div>
            <div class="socials_thanksPop">
                <a href="https://vk.com/blogbigbro" target="_blank"><img src="../assets/vk_pop.png"></a>
                <a href="https://t.me/bigbrobarbershopfranshiza" target="_blank"><img src="../assets/tg_pop.png"></a>
            </div>
            <p @click="thankPop = false" class="close_thank_pop">&#10006;</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Button from './ui_components/Button.vue';
    import PopUp from './ui_components/PopUp.vue';
    import PopUpTwo from './ui_components/PopUpTwo.vue';
    import { MaskInput } from 'vue-3-mask';
    export default {
        components: {
            Button,
            PopUp,
            PopUpTwo,
            MaskInput
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
                },
                steps: [
                    {
                        id: 1,
                        title: 'База знаний',
                        description: 'Откроем доступ к онлайн энциклопедии в которой пошагово расписан план открытия и ведения бизнеса',
                        image: require('../assets/baza.png')
                    },
                    {
                        id: 2,
                        title: 'Помещение',
                        description: 'Расскажем, подскажем, поможем, проанализируем и проверим найденное помещение',
                        image: require('../assets/place.png')
                    },
                    {
                        id: 3,
                        title: 'Ремонт',
                        description: 'Разработаем дизайн проект, поможем с наймом строительной бригады, дадим рекомендации и материалы для ремонта',
                        image: require('../assets/remont.png')
                    },
                    {
                        id: 4,
                        title: 'Персонал',
                        description: 'Подскажем где искать, как проводить собеседования, проведем тестирование и оценку навыков',
                        image: require('../assets/personal.png')
                    },
                    {
                        id: 5,
                        title: 'Маркетинг',
                        description: 'Еще на этапе ремонта запустим подготовим соцсети, настроим рекламу и начнем привлечение клиентов',
                        image: require('../assets/marketing.png')
                    },
                    {
                        id: 6,
                        title: 'Открытие',
                        description: 'Поможем с организацией технического и официального открытия с розыгрышами и призами',
                        image: require('../assets/remont.png')
                    }
                ],
                partners: [
                    {
                        id: 1,
                        name: 'Сергей Самойлов',
                        city: 'Комсомольск-на-Амуре',
                        shops: '2',
                        money: '2 546 000',
                        image: require('../assets/image16.png'),
                        avatar: require('../assets/sam.png')
                    },
                    {
                        id: 2,
                        name: 'Андрей Бураков',
                        city: 'Ижевск',
                        shops: '3',
                        money: '3 927 000',
                        image: require('../assets/image16.png'),
                        avatar: require('../assets/bur.png')
                    },
                    {
                        id: 3,
                        name: 'Алексей Цыпринюк',
                        city: 'Волгоград',
                        shops: '3',
                        money: '4 239 000',
                        image: require('../assets/image16.png'),
                        avatar: require('../assets/cip.png')
                    }
                ],
                isShowPop: false,
                message: '',
                photos: [
                    {
                        id: 1,
                        image: require('../assets/vhod.jpg')
                    },
                    {
                        id: 2,
                        image: require('../assets/inside.jpg')
                    },
                    {
                        id: 3,
                        image: require('../assets/inside2.jpg')
                    }
                ],
                activephoto: 2,
                isShowPopTime: false,
                thankPop: false
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
            },
            closePopUp() {
                this.isShowPop = false
            },
            openPop() {
                this.isShowPop = true
            },
            closePopTime() {
                this.isShowPopTime = false
            },
            async sendForm() {
                try {
                    // this.message = 'Терпения BRO, отправляем'
                    const response = await axios.post('api/postform', this.form);
                    this.form.name = '';
                    this.form.phone = '';
                    this.form.city = '';
                    if (response.status === 200) {
                        console.log('Данные ушли');
                        // this.message = 'BRO, твои данные отправлены';
                        this.thankPop = true
                        // setTimeout(() => {
                        //     this.message = ''
                        // }, 3000)
                    } else if (response.status === 401) {
                        console.log('Ебаная ошибка')
                        this.message = 'Возникла ошибка, попробуйте еще раз'
                        setTimeout(() => {
                            this.message = ''
                        }, 3000)
                    }
                } catch(error) {
                    console.log(error);
                }
            },
            changePhoto (id) {
                this.activephoto = id
            },
            fetchingPopUpData(data) {
                this.form = data;
                console.log(this.form)
                this.sendForm();
                this.closePopTime();
                this.closePopUp();
            },
            trackGoal() {
                if (window.ym) {
                    // Идентификатор счетчика (замените на ваш)
                    window.ym(98455671, 'reachGoal', 'form_sent');
                    console.log('Цель отправлена в Яндекс Метрику');
                } else {
                    console.warn('Яндекс Метрика не подключена');
                }
            }
        },
        mounted() {
            this.calc.value = (1560 * 650 * this.calc.money) * this.calc.period;
            this.bigCalc.cut = 1000
            this.bigCalc.rent = 700
            this.bigCalc.chairs = 1
            setTimeout(() => {
                this.isShowPopTime = true;
            }, 60000)
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
    align-items: center;
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
@media all and (max-width: 360px) {
    .main_div h1 {
    font-size: 32px;
    color: #fff;
    line-height: 120%;
    font-weight: 900;
    text-align: center;
}
.main_div span {
    font-size: 48px;
}
.main_div h3 {
    font-size: 48px;
    color: #DFB700;
    transform: rotate(-5deg);
    line-height: 100%;
}
.main_div {
    gap: 16px;
}
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
    color: #fff;
    font-size: 16px;
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
    .picture p {
        font-size: 12px;
    }
}
@media all and (max-width: 370px) {
    .calc_value span {
    font-size: 48px;
    font-weight: 900;
    line-height: 100%;
}
.picture p {
    font-size: 10px;
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
@media all and (max-width:370px) {
    .big_calc_value_viruchka span {
    font-size: 40px;
    color: #DFB700;
    font-weight: 900;
    }
    .click_tab img {
        width: 40px;
    }
}
.why_we {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 40px 0px;
    justify-content: center;
    align-items: center;
}
.why_we_main {
    width: 1200px;
    display: flex;
    flex-direction: column;
}
.why_we_main h4 {
    font-size: 64px;
    font-weight: 900;
    color: #333;
    text-align: start;
}
.why_we_cards {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
}
.why_we_card {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 18px;
    box-sizing: border-box;
    width: calc(100% / 3 - 12px);
    height: 660px;
    padding: 24px;
    border-radius: 32px;
    color: #fff;
}
.why_we_card h3 {
    font-size: 42px;
    font-weight: 700;
}
.why_we_card p {
    font-size: 20px;
    font-weight: 400;
}
.why_we_card:nth-child(1) {
    background: linear-gradient(-45deg, rgba(255, 212, 101, 1), rgba(184, 144, 39, 1));
}
.why_we_card:nth-child(1) img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 50%;
}
.why_we_card:nth-child(2) {
    background: linear-gradient(-45deg, rgba(180, 255, 105, 1), rgba(108, 153, 103, 1));
}
.why_we_card:nth-child(2) img {
    position: absolute;
    bottom: 20px;
    left: 0;
    height: 50%;
}
.why_we_card:nth-child(3) {
    background: linear-gradient(-45deg, rgba(0, 133, 255, 1), rgba(0, 80, 153, 1));
}
.why_we_card:nth-child(3) img {
    position: absolute;
    bottom: 0px;
    left: 50%;
    height: 50%;
    transform: translate(-50%);
}
@media all and (max-width: 440px) {
    .why_we {
        padding: 40px 10px;
        box-sizing: border-box;
    }
    .why_we_main {
        width: 100%;
        box-sizing: border-box;
    }
    .why_we_main h4 {
        font-size: 32px;
        text-align: center;
    }
    .why_we_cards {
        flex-direction: column;
        box-sizing: border-box;
        gap: 12px;
    }
    .why_we_card {
        width: 100%;
        height: 500px;
        box-sizing: border-box;
    }
    .why_we_card:nth-child(1) img {
        height: 50%;
    }
    .why_we_card:nth-child(2) img {
        height: 50%;
    }
    .why_we_card:nth-child(3) img {
        height: 50%;
    }
}
@media all and (max-width: 370px) {
    .why_we {
        padding: 40px 10px;
        box-sizing: border-box;
    }
    .why_we_main {
        width: 100%;
        box-sizing: border-box;
    }
    .why_we_main h4 {
        font-size: 32px;
        text-align: center;
    }
    .why_we_cards {
        flex-direction: column;
        box-sizing: border-box;
        gap: 12px;
    }
    .why_we_card {
        width: 100%;
        height: 500px;
        box-sizing: border-box;
    }
    .why_we_card:nth-child(1) img {
        height: 50%;
    }
    .why_we_card:nth-child(2) img {
        height: 50%;
    }
    .why_we_card:nth-child(3) img {
        height: 50%;
    }
    .why_we_card h3 {
        font-size: 32px;
    }
    .why_we_card p {
        font-size: 16px;
    }
}
.steps_launch {
    width: 100%;
    padding: 40px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
    box-sizing: border-box;
}
.steps_launch_main {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.steps_launch_main h3 {
    font-size: 64px;
    text-align: center;
    font-weight: 900;
    color: #fff;
}
.steps_launch_main p {
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    color: #fff;
}
.steps {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    gap: 120px;
    flex-wrap: wrap;
    margin-bottom: 40px;
}
.step {
    width: 320px;
    height: 340px;
    border: 1px solid #A8A8A8;
    border-radius: 20px;
    box-sizing: border-box;
    position: relative;
    padding: 12px 12px 0px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.step h3 {
    font-size: 32px;
    font-weight: 500;
    color: #fff;
}
.step p {
    font-size: 16px;
    font-weight: 300;
    color: #fff;
}
.step img {
    height: 160px;
    object-fit: contain;
}
.number_step {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    border-radius: 50%;
    border: 1px solid #fff;
    background: #DFB700;
    color: #fff;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media all and (max-width: 440px) {
    .steps_launch {
        padding: 40px 10px;
    }
    .steps_launch_main {
        width: 100%;
    }
    .steps_launch_main h3 {
        font-size: 32px;
    }
    .steps_launch_main p {
        font-size: 16px;
    }
    .steps {
    margin-top: 32px;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    align-items: center;
}
}
@media all and (max-width: 370px) {
    .steps_launch {
        padding: 40px 10px;
    }
    .steps_launch_main {
        width: 100%;
    }
    .steps_launch_main h3 {
        font-size: 32px;
    }
    .steps_launch_main p {
        font-size: 16px;
    }
    .steps {
    margin-top: 32px;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    align-items: center;
    }
    .step {
        width: calc(100% - 32px);
    }
}
.photos {
    width: 100%;
    padding: 40px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.photos_main {
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.photos_main p {
    font-size: 64px;
    font-weight: 900;
    color: #333;
    text-align: center;
}
.photo_div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.photo_div img {
    width: calc(100% / 3 - 16px);
    object-fit: contain;
}
.another_photo {
    width: 100%;
    position: relative;
    height: 700px;
}
.big_photo {
    width: 100%;
    max-height: 700px;
    object-fit: cover;
    display: block;
    border-radius: 12px;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, .25);
    opacity: 0;
    transition: all 300ms ease;
    position: absolute;
    top: 0;
    left: 0;
}
.big_photo.activeimage {
    /* display: block; */
    opacity: 1;
}
.all_photos {
    width: 320px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-20%, -20%);
    box-sizing: border-box;
    padding: 16px;
    border-radius: 24px;
    background: rgba(255, 255, 255, .3);
    backdrop-filter: blur(2px);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding: 16px;
}
.thumb_photo {
    display: block;
    width: 120px;
    object-fit: contain;
    border-radius: 12px;
    cursor: pointer;
    transition: all 300ms ease;
    scroll-snap-align: start;
}
.thumb_photo:hover {
    transform: scale(1.1);
}
@media all and (max-width: 440px) {
    .another_photo {
    width: 100%;
    height: 450px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.big_photo {
    width: 100%;
    height: auto !important;
    object-fit: cover;
    display: block;
    border-radius: 12px;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, .25);
    opacity: 0;
    transition: all 300ms ease;
    position: absolute;
    top: 0;
    left: 0;
}
.big_photo.activeimage {
    /* display: block; */
    opacity: 1;
}
.all_photos {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 12px;
    position: absolute;
    bottom: -40px;
    left: 0;
    transform: translate(0, -50%);
    box-sizing: border-box;
    padding: 0;
    border-radius: 12px;
    background: rgba(255, 255, 255, .3);
    backdrop-filter: blur(2px);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding: 16px;
    align-self: center;
}
.thumb_photo {
    display: block;
    width: 140px;
    object-fit: contain;
    border-radius: 12px;
    cursor: pointer;
    transition: all 300ms ease;
    scroll-snap-align: start;
}
.thumb_photo:hover {
    transform: scale(1.1);
}
}
@media all and (max-width: 440px) {
    .photos {
        padding: 40px 10px;
    }
    .photos_main {
        width: 100%;
    }
    .photos_main p {
        font-size: 32px;
    }
    .photo_div {
        justify-content: start;
        gap: 12px;
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
    }
    .photo_div img {
        width: 90%;
        scroll-snap-align: start;
    }
}
.partners {
    width: 100%;
    padding: 40px 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
    color: #fff;
}
.partners_main {
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.partners_main p {
    font-size: 64px;
    font-weight: 900;
    text-align: center;
}
.partners_div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.partner_card {
    box-sizing: border-box;
    width: 350px;
    height: 270px;
    border: 1px solid #A8A8A8;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}
.avatar_data {
    width: 100%;
    display: flex;
    padding: 16px 16px 0px 16px;
    flex-direction: row;
    gap: 12px;
}
.datas {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.datas p {
    font-size: 18px;
    font-weight: 900;
}
.datas h6 {
    font-size: 12px;
    font-weight: 500;
}
.datas span {
    font-weight: 900;
    color: #DFB700;
}
@media all and (max-width: 440px) {
    .partners {
        padding: 40px 10px;
    }
    .partners_main {
        width: 100%;
    }
    .partners_main p {
        font-size: 32px;
    }
    .partners_div {
        flex-direction: column;
        gap: 16px;
        align-items: center;
    }
    .partner_card p {
        font-size: 20px;
    }
}
@media all and (max-width: 370px) {
    .partners {
        padding: 40px 10px;
    }
    .partners_main {
        width: 100%;
    }
    .partners_main p {
        font-size: 32px;
    }
    .partners_div {
        flex-direction: column;
        gap: 16px;
        align-items: center;
        box-sizing: border-box;
    }
    .partner_card p {
        font-size: 20px;
    }
    .partner_card {
        width: 100%;
    }
    .datas p {
        text-align: start;
    }
}
.chek_launch {
    width: 100%;
    padding: 40px 0px;
    box-sizing: border-box;
    background: linear-gradient(180deg, rgba(51,51,51, 1), rgba(223, 183, 0, 1)61%);
    display: flex;
    justify-content: center;
    align-items: center;
}
.chek_launch_main {
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
}
.chek_launch_main p {
    font-size: 64px;
    font-weight: 900;
    color: #fff;
    text-align: center;
}
.chech {
    width: 500px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 64px 24px;
    background: url(../assets/Vector1.svg);
    filter: drop-shadow(0px 8px 20px 0px rgba(0,0,0, .25));
    -webkit-filter: drop-shadow(0px 8px 20px 0 rgba(0,0,0, .25));
    background-repeat: no-repeat;
    background-position: center;
    box-sizing: border-box;
    gap: 24px;
}
.chech h2 {
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    line-height: 100%;
}
.chech span {
    font-size: 32px;
    font-weight: 100;
    text-align: center;
    line-height: 100%;
    color: #333;
}
.disclaimer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #333;
}
.disclaimer p {
    font-size: 32px;
    color: #333;
    font-weight: 100;
    line-height: 100%;
}
.disclaimer h6 {
    font-size: 12px;
    font-weight: 100;
    line-height: 100%;
}
.check_values {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #333;
}
.check_value {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.check_value p {
    font-size: 24px;
    font-weight: 100;
    line-height: 100%;
    color: #333;
}
.check_value span {
    font-size: 24px;
    font-weight: 500;
    line-height: 100%;
}
.vlaue_div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.vlaue_div span {
    font-size: 32px;
    font-weight: 900;
}
@media all and (max-width: 440px) {
    .chek_launch {
        padding: 40px 10px;
    }
    .chek_launch_main {
        width: 100%;
    }
    .chek_launch_main p {
        font-size: 32px;
    }
    .chech {
        width: 100%;
        height: auto;
        background-size: 100% 100%;
        gap: 16px
    }
    .chech h2 {
        font-size: 24px;
    }
    .disclaimer p {
        font-size: 24px;
    }
    .disclaimer h6 {
        font-size: 10px;
    }
    .check_value p {
        font-size: 16px;
    }
    .check_value span {
        font-size: 20px;
    }
    .vlaue_div span {
        font-size: 24px;
    }
}
@media all and (max-width: 370px) {
    .chek_launch {
        padding: 40px 10px;
    }
    .chek_launch_main {
        width: 100%;
    }
    .chek_launch_main p {
        font-size: 32px;
    }
    .chech {
        width: 100%;
        height: auto;
        background-size: 100% 100%;
        gap: 16px
    }
    .chech h2 {
        font-size: 20px;
    }
    .chech span {
        font-size: 20px;
    }
    .disclaimer p {
        font-size: 20px;
    }
    .disclaimer h6 {
        font-size: 10px;
    }
    .check_value p {
        font-size: 12px;
    }
    .check_value span {
        font-size: 16px;
    }
    .vlaue_div span {
        font-size: 20px;
    }
}
.gift {
    width: 100%;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
    box-sizing: border-box;
    overflow: hidden;
}
.gift_main {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    gap: 32px;
}
.left_side_gift {
    width: calc(50% - 16px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 16px;
    z-index: 1;
}
.left_side_gift h3 {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    color: #DFB700;
}
.left_side_gift p {
    font-size: 32px;
    font-weight: 300;
    line-height: 100%;
    color: #fff;
}
.left_side_gift span {
    font-size: 96px;
    font-weight: 900;
    line-height: 100%;
    color: red;
}
.right_side_gift {
    width: calc(50% - 16px);
    height: 580px;
    position: relative;
}
.right_side_gift img {
    max-height: 500px;
    object-fit: contain;
    border-radius: 24px;
    box-shadow: 0px 0px 8px 1px rgba(255, 255, 255, .25);
    position: absolute;
}
.right_side_gift img:nth-child(1) {
    transform: rotate(12deg);
    top: 0;
    right: 0;
    z-index: 1;
}
.right_side_gift img:nth-child(2) {
    transform: rotate(-12deg);
    top: 0;
    right: 300px;
    z-index: 0;
}
@media all and (max-width: 440px) {
    .gift {
    width: 100%;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 10px;
    box-sizing: border-box;
}
.gift_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    gap: 32px;
}
.left_side_gift {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    z-index: 1;
}
.left_side_gift h3 {
    font-size: 48px;
    font-weight: 900;
    line-height: 100%;
    color: #DFB700;
    text-align: center;
}
.left_side_gift p {
    font-size: 24px;
    font-weight: 300;
    line-height: 100%;
    color: #fff;
    text-align: center;
}
.left_side_gift span {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    color: red;
    text-align: center;
}
.right_side_gift {
    width: 100%;
    height: auto;
    position: relative;
}
.right_side_gift img {
    max-height: auto;
    width: 50%;
    object-fit: cover;
    border-radius: 24px;
    box-shadow: 0px 0px 8px 1px rgba(255, 255, 255, .25);
    position: relative
}
.right_side_gift img:nth-child(1) {
    transform: rotate(-12deg);
    top: 0;
    right: 0;
    z-index: 1;
}
.right_side_gift img:nth-child(2) {
    transform: rotate(12deg);
    top: 0;
    left: 0;
    z-index: 0;
}
}
.what_else {
    width: 100%;
    box-sizing: border-box;
    padding: 40px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.what_else_main {
    width: 1200px;
    display: flex;
    flex-direction: column;
}
.what_else_main p {
    font-size: 64px;

    font-weight: 900;
    text-align: center;
}
.what_else_main span {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
}
.what_else_cards {
    margin-top: 40px;
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 32px;
    flex-wrap: wrap;
}
.what_else_card {
    width: calc(100% / 2 - 16px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    box-sizing: border-box;
    border-radius: 32px;
    gap: 8px;
}
.what_else_card_text {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.what_else_card_text h3 {
    font-size: 32px;
    font-weight: 900;
    line-height: 100%;
    color: #fff;
}
.what_else_card_text h4 {
    font-size: 16px;
    font-weight: 100;
    line-height: 100%;
    color: #fff;
}
.what_else_card img {
    height: 200px;
    object-fit: contain;
}
.what_else_card:nth-child(1) {
    background: linear-gradient(-60deg, rgba(56, 64, 73, 1), rgba(223, 183, 0, 1));
}
.what_else_card:nth-child(2) {
    background: linear-gradient(60deg, rgba(187, 253, 45, 1), rgba(34, 41, 195, 1));
}
.what_else_card:nth-child(3) {
    background: linear-gradient(60deg, rgba(195, 116, 34, 1), rgba(253, 221, 45, 1));
}
.what_else_card:nth-child(4) {
    background: linear-gradient(60deg, rgba(62, 27, 29, 1), rgba(208, 27, 3, 1));
}
@media all and (max-width: 440px) {
    .what_else {
        padding: 40px 10px;
    }
    .what_else_main {
        width: 100%;
    }
    .what_else_main p {
        font-size: 32px;
    }
    .what_else_main span {
        font-size: 16px;
    }
    .what_else_cards {
        flex-direction: column;
        gap: 16px;
    }
    .what_else_card {
        width: 100%;
    }
    .what_else_card img {
        max-height: 160px;
        max-width: calc(100% / 2 - 8px);
    }
    .what_else_card_text {
        max-width: calc(100% / 2 - 8px);
    }
    .what_else_card_text h3 {
        font-size: 24px;
    }
}
.come_to_bb {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 40px 0px;
    background: #333;
    color: #fff;
}
.come_to_bb_main {
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.come_to_bb_main p {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    text-align: center;
}
.come_to_bb_card {
    width: 100%;
    box-sizing: border-box;
    border-radius: 32px;
    background: linear-gradient(45deg, rgba(223, 183, 0, 1), rgba(126, 106, 11, 1));
    padding: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
}
.left_sode_card {
    display: flex;
    width: calc(50% - 16px);
    flex-direction: column;
    gap: 32px;
}
.left_sode_card h3 {
    font-size: 32px;
    font-weight: 900;
    line-height: 100%;
}
.left_sode_card h4 {
    font-size: 24px;
    font-weight: 200;
    line-height: 100%;
}
.right_side_card {
    width: calc(50% - 16px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 16px;
}
.card_uslovie {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: start;
}
.card_uslovie p {
    font-size: 32px;
    font-weight: 200;
    line-height: 100%;
}
.card_uslovie span {
    font-size: 40px;
    font-weight: 900;
    line-height: 100%;
}
@media all and (max-width: 440px) {
    .come_to_bb {
        padding: 40px 10px;
    }
    .come_to_bb_main {
        width: 100%;
    }
    .come_to_bb_main p {
        font-size: 32px;
    }
    .come_to_bb_card {
        flex-direction: column;
        gap: 32px;
        border-radius: 24px;
        padding: 20px;
    }
    .left_sode_card {
        width: 100%;
        gap: 8px;
    }
    .left_sode_card h3 {
        font-size: 20px;
    }
    .left_sode_card h4 {
        font-size: 16px;
    }
    .right_side_card {
        width: 100%;
    }
    .card_uslovie p {
        font-size: 20px;
    }
    .card_uslovie span {
        font-size: 28px;
    }
}
.footer {
    width: 100%;
    padding: 40px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.footer_main {
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 40px
}
.footer_main p {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    text-align: center;
}
.footer_main span {
    font-size: 32px;
    text-align: center;
    font-weight: 100;
}
.footer_content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
}
.footer_right_side {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    border-radius: 24px;
    box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, .25);
    padding: 24px;
}
.footer_right_side img {
    width: 96px;
    object-fit: contain;
}
.socials {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.socials p {
    font-size: 24px;
    text-align: start;
}
.socials_link {
    display: flex;
    flex-direction: row;
    gap: 4px;
}
.socials_link img {
    width: 64px;
    object-fit: contain;
}
.footer_left_side {
    width: calc(50% - 16px);
    display: flex;
    box-sizing: border-box;
}
.footer_left_side form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-sizing: border-box;
    padding: 24px;
    border-radius: 24px;
    border: 1px solid #c2c2c2;
    background: #333;
    box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, .25);
}
.footer_left_side form input {
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    border-bottom: 1px solid #DFB700 !important;
    background: transparent;
    color: #fff;
}
.footer_left_side input::placeholder {
    color: #fff;
}
.logo_polici {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.logo_polici img {
    width: 200px;
    object-fit: contain;
}
.logo_polici p {
    font-size: 16px;
    font-weight: 300;
    cursor: pointer;
}
@media all and (max-width: 440px) {
    .footer {
        padding: 40px 10px;
    }
    .footer_main {
        width: 100%;
    }
    .footer_main p {
        font-size: 32px;
    }
    .footer_main span {
        font-size: 16px;
    }
    .footer_content {
        flex-direction: column;
    }
    .footer_right_side {
        width: 100%;
    }
    .footer_right_side img {
        width: 64px;
    }
    .socials p {
        font-size: 24px;
    }
    .socials_link img {
        width: 32px;
    }
    .footer_left_side {
        width: 100%;
    }
    .logo_polici img {
        width: 120px;
    }
    .logo_polici p {
        font-size: 12px;
    }
}
.thankPop {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1002;
    box-sizing: border-box;
}
.thankPop_main {
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    background: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    padding: 24px;
    position: relative;
}
.text_thankPop {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}
.text_thankPop p {
    font-size: 32px;
    font-weight: 900;
}
.text_thankPop span {
    font-size: 16px;
    font-weight: 300;
    color: #DFB700;
}
.text_thankPop h4 {
    font-size: 24px;
    font-weight: 100;
}
.socials_thanksPop {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.socials_thanksPop img {
    width: 120px;
    object-fit: contain;
    cursor: pointer;
    transition: all 200ms ease;
}
.socials_thanksPop img:hover {
    transform: scale(1.2);
}
.close_thank_pop {
    position: absolute;
    top: 12px;
    right: 12px;
    color: #DFB700;
    font-size: 24px;
    cursor: pointer;
}
@media all and (max-width: 440px) {
    .thankPop {
        padding: 0px 10px;
    }
    .thankPop_main {
        width: 100%;
    }
}
</style>