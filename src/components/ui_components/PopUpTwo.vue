<template>
    <div class="popup" v-if="isOpenTime">
        <div class="popup_main">
            <img src="@/assets/gift.jpg">
            <form @submit.prevent="sendForm">
                <h5>Оставьте и получите в подарок услугу на выбор при заключении лицензионного договора</h5>
                <input v-model="form.name" type="text" name="name" id="name" placeholder="Имя">
                <input v-model="form.phone" type="text" name="phone" id="phone" placeholder="Телефон">
                <input v-model="form.city" type="text" name="city" id="city" placeholder="Город">
                <div v-show="message !== ''" style="align-self: center; line-height: 100%; font-size: 24px; color: #DFB700;">{{ message }}</div>
                <Button :disabled="!form.name || !form.phone || !form.city" type="submit" @click="trackGoal"><slot>Отправить</slot></Button>
            </form>
            <p @click="this.$emit('closePopTime')">&#10006;</p>
        </div>
    </div>
</template>

<script>
    import Button from './Button.vue';
    export default {
        props: {
            isOpenTime: {
                type: Boolean,
                required: true
            }
        },
        components: {
            Button
        },
        data() {
            return {
                form: {
                    name: '',
                    phone: '',
                    city: ''
                }
            }
        },
        methods: {
            sendForm() {
                this.$emit('sendPopForm', this.form)
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
        }
    }
</script>

<style scoped>
    .popup {
        width: 100%;
        height: 100svh;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }
    .popup_main {
        width: 600px;
        display: block;
        position: relative;
    }
    .popup_main p {
        position: absolute;
        top: 24px;
        right: 24px;
        transform: translate(50%, -50%);
        color: #DFB700;
        cursor: pointer;
        font-size: 24px;
    }
    .popup_main form {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        gap: 24px;
        box-sizing: border-box;
        padding: 32px;
        background-color: #fff;
    }
    .popup_main form h5 {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        color: #DFB700;
        line-height: 100%;
    }
    .popup_main form input {
        box-sizing: border-box;
        width: 100%;
        padding: 12px 12px;
        border-radius: 32px;
        border: 1px solid #333;
        box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 25);
    }
    .popup_main img {
        width: 100%;
    }
    @media all and (max-width: 440px) {
        .popup_main {
        width: 100%;
        height: auto;
        display: block;
        position: relative;
    }
    .popup_main p {
        position: absolute;
        top: 24px;
        right: 24px;
        transform: translate(50%, -50%);
        color: #DFB700;
        cursor: pointer;
        font-size: 24px;
    }
    .popup_main form {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 16px;
        box-sizing: border-box;
        padding: 32px;
        background-color: #fff;
    }
    .popup_main form h5 {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        color: #DFB700;
        line-height: 100%;
    }
    .popup_main form input {
        box-sizing: border-box;
        width: 100%;
        padding: 12px 12px;
        border-radius: 32px;
        border: 1px solid #333;
        box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 25);
    }
    }
</style>