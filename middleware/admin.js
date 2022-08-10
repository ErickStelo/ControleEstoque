export default function (context) {
    var autorization = context.app.$cookiz.get('access-token');
    if(!autorization){
        context.redirect({name: 'login'})
    }
}