$(document).ready(function(){

    function game(){

        var arr = [];
        var arr_cpu = [];

        $(".rock_option").on("click", function(){
            $(".rock").css({
                'opacity' : '100'
            });
            arr.unshift("1");
            $(".rock_option").prop("disabled", true);
            $(".paper_option").prop("disabled", true);
            $(".scissors_option").prop("disabled", true);
        })
        $(".scissors_option").on("click", function(){
            $(".scissors").css({
                'opacity' : '100'
            });
            arr.unshift("2");
            $(".rock_option").prop("disabled", true);
            $(".paper_option").prop("disabled", true);
            $(".scissors_option").prop("disabled", true);
        })
        $(".paper_option").on("click", function(){
            $(".paper").css({
                'opacity' : '100'
            });
            arr.unshift("3");
            $(".rock_option").prop("disabled", true);
            $(".paper_option").prop("disabled", true);
            $(".scissors_option").prop("disabled", true);
        })

        $(".fight").on('click', function(){
            if(arr.length == 0){
                alert("Please choose your command.");
            } else {
                function a(){
                    $('.rock-cpu').css({
                        'opacity': '100'
                    })
                    arr_cpu.unshift("4");
                }
                function b(){
                    $('.scissors-cpu').css({
                        'opacity': '100'
                    })
                    arr_cpu.unshift("5");
                }
                function c(){
                    $('.paper-cpu').css({
                        'opacity': '100'
                    })
                    arr_cpu.unshift("6");
                }
                
                var func = ["a", "b", "c"];
                n = Math.floor(Math.random()*3);
                eval(func[n])();

                function result(){
                    if(arr[0] == "1" && arr_cpu[0] == "4"){
                        $(".rock").css({
                            'opacity': '0'
                        });
                        $(".rock-cpu").css({
                            'opacity': '0'
                        })
                        $(".equal").css({
                            'opacity': '100'
                        })
                        $(".equal-cpu").css({
                            'opacity': '100'
                        })
                        $(".fight").prop("disabled", true);
                    }
                    if(arr[0] == "1" && arr_cpu[0] == "5"){
                        $(".rock").css({
                            'opacity': '0'
                        });
                        $(".scissors-cpu").css({
                            'opacity': '0'
                        })
                        $(".circle").css({
                            'opacity': '100'
                        })
                        $(".xmark-cpu").css({
                            'opacity': '100'
                        })
                        $(".fight").prop("disabled", true);
                    }
                    if(arr[0] == "1" && arr_cpu[0] == "6"){
                        $(".rock").css({
                            'opacity': '0'
                        });
                        $(".paper-cpu").css({
                            'opacity': '0'
                        })
                        $(".xmark").css({
                            'opacity': '100'
                        })
                        $(".circle-cpu").css({
                            'opacity': '100'
                        })
                        $(".fight").prop("disabled", true);
                    }
                    if(arr[0] == "2" && arr_cpu[0] == "4"){
                        $(".scissors").css({
                            'opacity': '0'
                        });
                        $(".rock-cpu").css({
                            'opacity': '0'
                        })
                        $(".xmark").css({
                            'opacity': '100'
                        })
                        $(".circle-cpu").css({
                            'opacity': '100'
                        })
                        $(".fight").prop("disabled", true);
                    }
                    if(arr[0] == "2" && arr_cpu[0] == "5"){
                        $(".scissors").css({
                            'opacity': '0'
                        });
                        $(".scissors-cpu").css({
                            'opacity': '0'
                        });
                        $(".equal").css({
                            'opacity': '100'
                        });
                        $(".equal-cpu").css({
                            'opacity': '100'
                        });
                        $(".fight").prop("disabled", true);
                    }
                    if(arr[0] == "2" && arr_cpu[0] == "6"){
                        $(".scissors").css({
                            'opacity': '0'
                        });
                        $(".paper-cpu").css({
                            'opacity': '0'
                        });
                        $(".circle").css({
                            'opacity': '100'
                        });
                        $(".xmark-cpu").css({
                            'opacity': '100'
                        });
                        $(".fight").prop("disabled", true);
                    }
                    if(arr[0] == "3" && arr_cpu[0] == "4"){
                        $(".paper").css({
                            'opacity': '0'
                        });
                        $(".rock-cpu").css({
                            'opacity': '0'
                        });
                        $(".circle").css({
                            'opacity': '100'
                        });
                        $(".xmark-cpu").css({
                            'opacity': '100'
                        });
                        $(".fight").prop("disabled", true);
                    }
                    if(arr[0] == "3" && arr_cpu[0] == "5"){
                        $(".paper").css({
                            'opacity': '0'
                        });
                        $(".scissors-cpu").css({
                            'opacity': '0'
                        });
                        $(".xmark").css({
                            'opacity': '100'
                        });
                        $(".circle-cpu").css({
                            'opacity': '100'
                        });
                        $(".fight").prop("disabled", true);
                    }
                    if(arr[0] == "3" && arr_cpu[0] == "6"){
                        $(".paper").css({
                            'opacity': '0'
                        });
                        $(".paper-cpu").css({
                            'opacity': '0'
                        });
                        $(".equal").css({
                            'opacity': '100'
                        });
                        $(".equal-cpu").css({
                            'opacity': '100'
                        });
                        $(".fight").prop("disabled", true);
                    }
                }

                setTimeout(result, 1000);
            }
        })

        $(".clear").on("click", function(){
            location.reload()
        });


    }

    game();

});