function throttle(fn, interval, immediate) {
    // immediate : true立即执行 false延迟执行
    if(immediate) {
        let last = 0;
        return function() {
            const now = Date.now();
            if (now - last > interval) {
                fn.apply(null, arguments);
                last = now;
            }
            
        }
    } else {
        let timer = null;
        return function() {
            const context = this;
            if (!timer) {
                timer = setTimeout(function(){
                    fn.apply(context, arguments);
                    timer = null;
                }, interval)
            }
        }
        
    }
}
function clickHandle() {
    console.log('--');
}

function debounce(fn, interval) {
    // 防抖
    var timer; // 维护同一个timer
    return function() {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context, arguments)
        }, interval);
    }
}
function debounce(fn, interval) {
        var timer; // 维护一个 timer
        return function () {
            var _this = this; // 取debounce执行作用域的this
            var args = arguments;
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
                // when to clear 
            }, delay);
        };
}
// 接雨水
// height :[0,1,2,3,0,1,2],依次计算出每个节点能够装多少雨水，加在一起即可
function calculate(arr) {
    let value = 0;
    let n = arr.length;
    // 边界问题
    if (length === 0) {
        return value;
    }
    for(let i=1;i<n-1;i++) {
        let l_max = 0;
        let r_max = 0;
        for(j=0;j<i;j++) {
            l_max = Math.max(height[j], l_max);
        }
        for(j=i;j>n;j--) {
            r_max = Math.max(height[j], r_max);
        }
        value += Math.min(l_max, r_max) - height[i];
    }
    return value;
}
var a = [1,2,3,4,5];
function calculate(arr) {
    let value = 0;
    let n = arr.length;
    // 边界问题
    if (length === 0) {
        return value;
    }
    // 计算每个节点左边最大的值，和右边最大的值
    let l_max = new Array(n);
    let r_max = new Array(n);
    l_max[0] = 0;
    r_max[n-1] = height[n-1];

    for(let j=1;j< n-1;j++) {
        l_max[j] = Math.max(height[j],l_max[j-1]);
    }
    for(let j=n-2;j>0;j--) {
        r_max[j] = Math.max(height[j],l_max[j+1]);
    }
    for(let i=1;i<=n -1;i++) {
        value += Math.min(l_max[i], r_max[j]) - height[i];
    }
    return value;
}
// 双指针 和快排的思想有点像 左边都是大的，有边都是小的
function calculate(arr) {
    let value = 0;
    let n = arr.length;
    // 边界问题
    if (length === 0) {
        return value;
    }
    // 计算每个节点左边最大的值，和右边最大的值
    let l_max = new Array(n);
    let r_max = new Array(n);
    l_max[0] = 0;
    r_max[n-1] = height[n-1];
    let left = 0;
    let right = n-1;

    while(left <= right) {
    }
    // for(let j=1;j< n-1;j++) {
    //     l_max[j] = Math.max(height[j],l_max[j-1]);
    // }

    for(let i=1;i<=n -1;i++) {
        value += Math.min(l_max[i], r_max[j]) - height[i];
    }
    return value;
}
// 

const throttleClickHandle = throttle(clickHandle, 1000, false);
throttleClickHandle();
throttleClickHandle();
throttleClickHandle();
throttleClickHandle();
throttleClickHandle();