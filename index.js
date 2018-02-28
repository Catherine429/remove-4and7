/**
 * Created by Administrator on 2018/2/28.
 */
export default function() {
    //遇到4或者7，就要将其换掉
    const replaced_num1 = 4, replaced_num2 = 7;

    //替换的数从下列区间中选择
    var replacing_zones = [
        {start:0, possible:replaced_num1},
        {start:replaced_num1+1, possible:replaced_num2 - replaced_num1 - 1},
        {start:replaced_num2+1, possible:10 - replaced_num2 - 1}
    ];

    //第一次得到的随机数
    var init = Math.floor(Math.random() * 100000) + '';

    //判断该随机数中是否有4或7
    if(init.indexOf('4') == -1 && init.indexOf('7') == -1) {
        //如果没有则直接返回
        return init;
    } else {

        //如果有，首先随机选一个替代区间
        var replacing_zones_num = Math.floor(Math.random() * 3);

        //再从替代区间内选一个随机数替代
        var res = init.replace(/[4|7]/g, Math.floor((replacing_zones[replacing_zones_num].start + Math.random() * replacing_zones[replacing_zones_num].possible)) + '');
        return res;
    }
}
