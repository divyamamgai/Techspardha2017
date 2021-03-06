/**
 * @preserve
 *
 * AboutUs.js
 * Houses the animation code of the Rocket in the About Us section of the website.
 *
 * @licence MIT
 * @author Rishabh Chanana <rishabhchanana97@gmail.com>
 * @author Divya Mamgai <divyamamgai21@gmail.com>
 *
 */

(function (d, $d, $) {
    var $Objects = {},
        Functions = {
            fireIn: function (item, delay) {
                TweenMax.to(item, 0.1, {
                    scale: 1.5,
                    repeat: -1,
                    repeatDelay: delay,
                    yoyo: true
                });
            },
            fireOut: function (item, delay) {
                TweenMax.to(item, 0.1, {
                    scale: 0.8,
                    repeat: -1,
                    repeatDelay: delay,
                    yoyo: true
                });
            },
            upDown: function () {
                TweenMax.to($Objects.rocket, 2, {
                    y: -30,
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 0.2,
                    ease: Sine.easeInOut
                });
            }
        };
    $d.ready(function () {
        $Objects.fire1 = $('#path4142');
        $Objects.fire2 = $('#path4142-5');
        $Objects.fire3 = $('#path4142-2');
        $Objects.fire4 = $('#path4142-4');
        $Objects.fire5 = $('#path4142-0');
        $Objects.fire6 = $('#path4142-44');
        $Objects.fire7 = $('#path4142-49');
        $Objects.rocket = $('#rocket');
    });

    window.FireAboutUsRocket = function () {
        Functions.upDown();
        Functions.fireIn($Objects.fire1, 0.1);
        Functions.fireOut($Objects.fire2, 0.15);
        Functions.fireOut($Objects.fire3, 0.2);
        Functions.fireIn($Objects.fire4, 0.1);
        Functions.fireIn($Objects.fire5, 0.05);
        Functions.fireIn($Objects.fire6, 0.18);
        Functions.fireOut($Objects.fire7, 0.1);
    };

    window.StopAboutUsRocket = function () {
        TweenMax.killTweensOf($Objects.fire1);
        TweenMax.killTweensOf($Objects.fire2);
        TweenMax.killTweensOf($Objects.fire3);
        TweenMax.killTweensOf($Objects.fire4);
        TweenMax.killTweensOf($Objects.fire5);
        TweenMax.killTweensOf($Objects.fire6);
        TweenMax.killTweensOf($Objects.fire7);
        TweenMax.killTweensOf($Objects.rocket);
    };

})(document, jQuery(document), jQuery);
