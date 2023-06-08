var w_of_alum_dissolved_rtemp = 20.72;
var w_of_alum_dissolved_60 = 63.08;
var w_of_crystal_with_seeding = 22.5;
var w_of_crystal_without_seeding = 18.7;
var amt_of_alum = 3.0;
function activity5() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle("To study the characteristics of crystallization under different conditions", 3);
    pp.showdescription("Calculate the values using shown formulae", 3);
    let activity5_formulae = `
        <p style="background-color: lightgreen; padding-left: 1%;">Weight of Alum dissolved at room temperature = 20</p>

        <p style="background-color: yellow; padding-left: 1%;">Weight of Alum dissolved at 60 C temperature = 63.08</p>

        <p style="background-color: bisque; padding-left: 1%;">Weight of Crystals with seeding effect A(gm) = 2.861</p>

        <p style="background-color: lightgrey; padding-left: 1%;">Weight of Crystals without seeding effect B(gm) =  18.7</p>

        <p style="background-color: skyblue; padding-left: 1%;">Amount of Alum powder added for the seeding effect A'(gm) = 3.0</p>

    `;
    show_panel(3);
    pp.addtoleftpannel(activity5_formulae);
    let act5_inputs = `
    <p style="text-align: center; font-size: 20px;">Amount of Alum powder in each beaker at 21.18gm room temperature to 60 C =>  (Y - X / 2)</p>

    <p style="text-align: center; font-size: 20px;">Actual Amount of Crystals recovered with seeding effect =>  A - A' </p>
    `;
    pp.addtoleftpannel(act5_inputs);
    let percentage_inputs = `
    <br><br>
    <p style="font-size: 20px;"> % recovery with seeding => (A - A') x 100 / ((Y - X) / 2) <br>
    <input style="width: 40%;" type="text" class="form-control" id="inp-1" />
    </p>

    <p style="font-size: 20px;">% recovery without seeding => (B x 100) / ((Y - X) / 2)
    <br>
    <input style="width: 40%;" type="text" class="form-control" id="inp-2" />
    </p>

    <p style="font-size: 20px;">% increase in weight of Crystals due to seeding => <br>
    difference in weight of crystals for crystallization with and without seeding x 100 / weight of Crystals without seeding
    <br>
    <input style="width: 40%;" type="text" class="form-control" id="inp-3" />
    </p>

    <p><input style="width: 20%;" type="button" class="btn btn-primary" value="Verify" id="inp-3" onclick="act5_verify();"></p>
    `;
    pp.addtoleftpannel(percentage_inputs);
    show_panel(3);
}
function act5_verify() {
    let val1 = document.getElementById(`inp-1`);
    let val2 = document.getElementById(`inp-2`);
    let val3 = document.getElementById(`inp-3`);
    if (!verify_values(parseFloat(val1.value), parseFloat(percent_ans[0]))) {
        alert(`please check % recovery with seeding value`);
        return;
    }
    if (!verify_values(parseFloat(val2.value), parseFloat(percent_ans[1]))) {
        alert(`please check % recovery without seeding value`);
        return;
    }
    if (!verify_values(parseFloat(val3.value), parseFloat(percent_ans[2]))) {
        alert(`% increase in weight of Crystals due to seeding`);
        return;
    }
    pp.showdescription("Calculations Verified!!", 3);
    show_panel(3);
}
//# sourceMappingURL=activity5.js.map