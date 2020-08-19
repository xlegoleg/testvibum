<template>
    <div class="main-dynamic">
        <div class="main-dynamic__input-text">
            Мы пользуемся только официальными инструментами рекламы, рекомендуемыми самим YouTube, поэтому все приведенные нами просмотры, лайки и комментарии будут настоящими, а подписчики живыми и заинтересованными в тематике Вашего канала.
        </div>
        <div class="main-dynamic__wrapper">
            <div class="main-dynamic__input">
                <div class="main-dynamic__input-wrapper">
                    <div class="main-dynamic__input-title">Введите сумму, чтобы увидеть прогноз по подписчикам и просмотрам</div>
                    <div class="main-dynamic__input-block">
                        <svg width="32" height="26" xmlns="http://www.w3.org/2000/svg">

                            <g>
                                <title>background</title>
                                <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
                            </g>
                            <g>
                                <title>Layer 1</title>
                                <path id="svg_2" fill="#9f48a2" d="m13,1c-6.61719,0 -12,5.38281 -12,12s5.38281,12 12,12s12,-5.38281 12,-12s-5.38281,-12 -12,-12zm0,22.5c-5.79004,0 -10.5,-4.70996 -10.5,-10.5s4.70996,-10.5 10.5,-10.5s10.5,4.70996 10.5,10.5s-4.70996,10.5 -10.5,10.5z"/>
                                <path id="svg_3" fill="#9f48a2" d="m13.27148,5.875l-3.0498,0c-0.41406,0 -0.75,0.33594 -0.75,0.75l0,5.625l-0.91016,0c-0.41406,0 -0.75,0.33594 -0.75,0.75s0.33594,0.75 0.75,0.75l0.91016,0l0,1l-0.91016,0c-0.41406,0 -0.75,0.33594 -0.75,0.75s0.33594,0.75 0.75,0.75l0.91016,0l0,3.125c0,0.41406 0.33594,0.75 0.75,0.75s0.75,-0.33594 0.75,-0.75l0,-3.125l2.8584,0c0.41406,0 0.75,-0.33594 0.75,-0.75s-0.33594,-0.75 -0.75,-0.75l-2.8584,0l0,-1l2.2998,0c2.71094,0 4.917,-1.7666 4.917,-3.9375s-2.20606,-3.9375 -4.917,-3.9375zm0,6.375l-2.2998,0l0,-4.875l2.2998,0c1.88379,0 3.417,1.09375 3.417,2.4375s-1.53321,2.4375 -3.417,2.4375z"/>
                            </g>
                        </svg>
                        <input
                                type="text"
                                class="main-dynamic__input-input"
                                v-model="inputNumber"
                                @keyup="changeHandler"
                        >
                        <div class="main-dynamic__input-rub">руб.</div>
                    </div>
                </div>
            </div>
            <div class="main-dynamic__blocks">
                <div class="main-dynamic__blocks-item">
                    <strong>+{{watches}}</strong>
                    <span>просмотров</span>
                </div>
                <div class="main-dynamic__blocks-item">
                    <strong>+{{subscribers}}</strong>
                    <span>подписчиков</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: 'DynamicPanel',

    props: ['sum'],

    data() {
        return {
            inputNumber: 0
        }
    },

    computed: {
        watches() {
            let number = Math.ceil(parseInt(this.sum)*1.123/10);
            return isNaN(number) || (number < 0) ? 0 : number;
        },

        subscribers() {
            let number = Math.ceil(parseInt(this.sum)*0.451/100);
            return isNaN(number) || (number < 0) ? 0 : number;
        },

        sumNumber: {
            get() {
                return this.sum;
            },
            set(value) {
                this.$emit('update:sum', value);
            }
        }
    },

    methods: {
        changeHandler(){
            this.sumNumber = this.inputNumber;
        }
    }
}

</script>

<style lang="scss">

    .main{

        &-dynamic{
            &__input{
                &-text{
                    font-size: 16px;
                    color: rgba(0,0,0, 0.6);
                    text-align: center;
                    line-height: 1.6;
                }
                &-title{
                    font-size: 14px;
                }
                &-wrapper{
                    padding: 20px 10px;
                    background-color: $lightblue;
                    border-radius: 4px;
                    margin-top: 20px;
                }
                &-block{
                    display: flex;
                    align-items: center;
                    margin-top: 20px;
                }
                &-input{
                    padding: 10px;
                    border-radius: 4px;
                    outline: none;
                    border: none;
                    margin:0 10px;
                    width: 100%;
                }
            }
            &__blocks{
                display: grid;
                grid-gap: 20px;
                grid-template-columns: repeat(2,1fr);
                margin-top: 20px;
                &-item{
                    padding: 20px 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width: 100%;
                    background-color: $purple;
                    border-radius: 4px;
                    strong{
                        font-size: 18px;
                        margin-bottom: 10px;
                    }
                    span{
                        font-size: 14px;
                    }
                }
            }
        }

        @media screen and (min-width: 540px) {
            &-dynamic{
                &__wrapper{
                    display: flex;
                    .main-dynamic__input{
                        width: 60%;
                        margin-right: 20px;
                        &-wrapper{
                            padding: 46px 16px;
                        }
                    }
                    .main-dynamic__blocks{
                        grid-template-columns: repeat(1,1fr);
                        width: 40%;
                        &-item{
                            padding: 13px 0px;
                        }
                    }
                }
            }
        }

        @media screen and (min-width: 960px ) {

            &-dynamic{
                &__input{
                    &-text{
                        text-align: start;
                    }
                    &-wrapper{
                        margin-top: 53px;
                        padding: 54px 16px;
                    }
                    &-title{
                        font-size: 20px;
                    }
                }
                &__wrapper{
                    .main-dynamic__input{
                        width: 100%;
                    }
                    .main-dynamic__blocks{
                        position: absolute;
                        top: -20px;
                        right: 0;
                        grid-template-columns: repeat(2,1fr);
                    }
                }
            }

        }

    }

</style>