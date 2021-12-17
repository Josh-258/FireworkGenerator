const app = Vue.createApp({
    data: function () {
        return {
            position: '^50^',
            pcolour: '',
            scolour: '',
            ipcolour: '',
            iscolour: '',
            oflicker: '',
            iflicker: '',
            otrail: '',
            itrail: '',
            fireowrkType: 'large',
            colors:
                {
                    red: {
                        name: 'Red',
                        dec: '11743532',
                    },
                    Orange: {
                        name: 'Orange',
                        dec: '15435844',
                    },
                    Yellow: {
                        name: 'Yellow',
                        dec: '14602026',
                    },
                    Lime: {
                        name: 'Lime',
                        dec: '4312372',
                    },
                    Green: {
                        name: 'Green',
                        dec: '3887386',
                    },
                    LightBlue: {
                        name: 'Light Blue',
                        dec: '6719955',
                    },
                    Cyan: {
                        name: 'Cyan',
                        dec: '2651799',
                    },
                    Blue: {
                        name: 'Blue',
                        dec: '2437522',
                    },
                    Purple: {
                        name: 'Purple',
                        dec: '8073150',
                    },
                    Magenta: {
                        name: 'Magenta',
                        dec: '12801229',
                    },
                    Pink: {
                        name: 'Pink',
                        dec: '14188952',
                    },
                    White: {
                        name: 'White',
                        dec: '15790320',
                    },
                    LightGray: {
                        name: 'Light Gray',
                        dec: '11250603',
                    },
                    Gray: {
                        name: 'Gray',
                        dec: '4408131',
                    },
                    Black: {
                        name: 'Black',
                        dec: '1973019',
                    },
                    Brown: {
                        name: 'Brown',
                        dec: '5320730',
                    },
                    Willow: {
                        name: 'Willow',
                        dec: '15314030',
                    }
                }
        }
    },
    methods: function () {

    }
})

const vm = app.mount('#app')