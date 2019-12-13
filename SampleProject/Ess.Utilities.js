// Created By : Mathew Varghese
// Created On : 05/Feb/2019

(function ($) {

    $.Ess = $.extend({}, $.Ess);

    $.Ess.Utilities = {};

    //#region Webmethod Call funtions

    $.Ess.Utilities.WebMethod = function (options) {
        try {
            var settings = $.extend({
                'methodName': '',
                'async': false,
                'cache': false,
                timeout: 30000,
                debug: false,
                'parameters': {},
                success: function (response) { },
                error: function (response) { }
            }, options); var parameterjson = "{}";
            var result = null;
            if (settings.parameters != null) { parameterjson = JSON.stringify(settings.parameters); }
            $.ajax({
                type: "POST",
                url: settings.methodName,
                data: parameterjson,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: settings.async,
                cache: settings.cache,
                timeout: settings.timeout,
                success: function (data) {
                    result = data;
                    if (result.d == "-1") {
                        //alert("Something Worng " + "\"\n\n+" + " Please Contact Your System Admin Call : 08891180009");
                    }
                    settings.success(result);
                },
                error: function (response) {
                    settings.error(response);
                    if (settings.debug) { alert("Error Calling Method \"" + settings.methodName + "\"\n\n+" + response.responseText); }
                }
            });

            return result;
        } catch (e) {
            alert("Error " + e);
        }
    };
    //end region

    //#region Session Call functions

    $.Ess.Utilities.GetSession = function () {
        var result = null;
        try {
            $.ajax({
                type: "POST",
                url: "../Pages/CodeBehind/AccountsCommon.aspx/GetSession",
                data: "{}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                cache: false,
                timeout: 30000,
                success: function (data) {
                    result = data.d;
                    return result;
                },
                failure: function (msg) {
                    alert("Error " + msg);
                },
                error: function (err) {
                    alert("Error " + err.response);
                }
            });
            return result;
        } catch (e) {
            alert("Error " + e);
        }

    };

    //end region
      
    //#region Common Funtion for DropDowm Fill

    $.Ess.Utilities.FillDropDown = function (options) {
        var settings = $.extend({
            controlID: [],
            webMethod: '',
            parameter: '',
            textField: '',
            valueField: '',
            hasDefaultText: true,
            defaultText: '<--Select-->',
            isAsync: false,
            selectedValue: '0',
            cache: false,
            timeout: 30000
        }, options);
        var parameterjson = "{}";
        var result = null;
        if (settings.parameters != null) {
            parameterjson = JSON.stringify(settings.parameters);
        }
        try {
            $.ajax({
                type: "POST",
                url: settings.methodName,
                data: parameterjson,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: settings.isAsync,
                cache: settings.cache,
                timeout: settings.timeout,
                success: function (result) {
                    var listItems = "";
                    listItems += '<option value=-1>' + "---Select---" + '</option>';
                    if (result.d == "-1") {
                        listItems = "";
                        listItems += '<option value=0>No Records</option>';
                    }
                    else if (result.d != "-1") {
                        var teams = eval('(' + result.d + ')');

                        $(settings.controlID[0]).empty();

                        if (teams !== null) {
                            for (var i = 0; i < teams.rows.length; i++) {
                                var mydata = teams.rows[i].cell;
                                listItems += "<option value='" + mydata[0] + "'>" + mydata[1] + "</option>";
                            }
                        }
                    }
                    $(settings.controlID[0]).html(listItems);
                },
                failure: function (response) {
                    alert("Error Calling Method \"" + settings.methodName + "\"\n\n+" + response.responseText);
                },
                error: function (response) {
                    if (settings.debug) { alert("Error Calling Method \"" + settings.methodName + "\"\n\n+" + response.responseText); }
                }
            });
        } catch (e) {
            alert("Error " + e);
        }
    };

    //end region

    //#region Common Funtion for DropDowm Fill without --Select--

    $.Ess.Utilities.FillDropDownWithoutSelect = function (options) {
        var settings = $.extend({
            controlID: [],
            webMethod: '',
            parameter: '',
            textField: '',
            valueField: '',
            hasDefaultText: true,
            defaultText: '<--Select-->',
            isAsync: false,
            selectedValue: '0',
            cache: false,
            timeout: 30000
        }, options);
        var parameterjson = "{}";
        var result = null;
        if (settings.parameters != null) {
            parameterjson = JSON.stringify(settings.parameters);
        }
        try {
            $.ajax({
                type: "POST",
                url: settings.methodName,
                data: parameterjson,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: settings.isAsync,
                cache: settings.cache,
                timeout: settings.timeout,
                success: function (result) {
                    var listItems = "";
                    //listItems += '<option value=-1>' + "---Select---" + '</option>';
                    if (result.d != "") {
                        var teams = eval('(' + result.d + ')');

                        $(settings.controlID[0]).empty();

                        if (teams !== null) {
                            var teams = eval('(' + result.d + ')');
                            for (var i = 0; i < teams.rows.length; i++) {
                                var mydata = teams.rows[i].cell;
                                listItems += "<option value='" + mydata[0] + "'>" + mydata[1] + "</option>";
                            }
                        }
                    }
                    $(settings.controlID[0]).html(listItems);
                },
                failure: function (response) {
                    alert("Error Calling Method \"" + settings.methodName + "\"\n\n+" + response.responseText);
                },
                error: function (response) {
                    if (settings.debug) { alert("Error Calling Method \"" + settings.methodName + "\"\n\n+" + response.responseText); }
                }
            });
        } catch (e) {
            alert("Error " + e);
        }
    };

    //end region

    //#region Common Funtion for DropDowm Fill with OptGroup

    $.Ess.Utilities.FillDropDownWithGroup = function (options) {
        var settings = $.extend({
            controlID: [],
            webMethod: '',
            parameter: '',
            textField: '',
            valueField: '',
            hasDefaultText: true,
            defaultText: '<--Select-->',
            isAsync: false,
            selectedValue: '0',
            cache: false,
            timeout: 30000
        }, options);
        var parameterjson = "{}";
        var result = null;
        if (settings.parameters != null) {
            parameterjson = JSON.stringify(settings.parameters);
        }
        try {
            $.ajax({
                type: "POST",
                url: settings.methodName,
                data: parameterjson,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: settings.isAsync,
                cache: settings.cache,
                timeout: settings.timeout,
                success: function (result) {
                    var listItems = "";
                    var optgroupItems = "";
                    listItems += '<option value=-1>' + "---Select---" + '</option>';
                    if (result.d != "") {
                        var teams = eval('(' + result.d + ')');

                        $(settings.controlID[0]).empty();

                        if (teams !== null) {
                            var teams = eval('(' + result.d + ')');
                            for (var i = 0; i < teams.rows.length; i++) {
                                var mydata = teams.rows[i].cell;
                                if (mydata[0] == 'H') {
                                    var itemHead = mydata[1];
                                    optgroupItems += "<optgroup  label='-- " + mydata[2] + " --'>";
                                    for (var j = 0; j < teams.rows.length; j++) {
                                        var rowdata = teams.rows[j].cell;
                                        if (itemHead == rowdata[3]) {
                                            optgroupItems += "<option value='" + rowdata[1] + "'>" + rowdata[2] + "</option>";
                                        }
                                    }
                                    optgroupItems += "</optgroup>";
                                }
                            }
                            listItems += optgroupItems;
                        }
                    }
                    $(settings.controlID[0]).html(listItems);
                },
                failure: function (response) {
                    alert("Error Calling Method \"" + settings.methodName + "\"\n\n+" + response.responseText);
                },
                error: function (response) {
                    if (settings.debug) { alert("Error Calling Method \"" + settings.methodName + "\"\n\n+" + response.responseText); }
                }
            });
        } catch (e) {
            alert("Error " + e);
        }
    };

    //end region

    //#region Date
    var arrDefinedDateFormats = ["dd/mm/yy", "mm/dd/yy"];
    var arrDefinedSeparators = ["/", "-"];
    var fromDateSeperator = "";
    var toDateSeperator = "";
    var arrDate1;
    var arrDate2;
    var arrDate3;

    $.Ess.Utilities.fnAddMonthtoDate = function (paramDate1, noMonth, controlName) {
        if (paramDate1 != "") {

            if (fnGetDatesForProcessing(paramDate1)) {
            }
        }
    }

    $.Ess.Utilities.isDateGreaterThan = function (paramDate1, paramDate2, isAlertRequired, alertMessage, controlName) {

        if (paramDate1 != "" && paramDate2 != "") {

            if (fnGetDatesForProcessing(paramDate1, paramDate2)) {
                if (parseInt(arrDate1[2] + arrDate1[1] + arrDate1[0]) > parseInt(arrDate2[2] + arrDate2[1] + arrDate2[0])) {
                    return true;
                }
                else {
                    isAlertRequired = isAlertRequired || false;
                    alertMessage = alertMessage || "Date is not greater";
                    controlName = controlName || "";
                    if (isAlertRequired) {
                        alert(alertMessage);
                    }
                }
            }
            return false;
        }
        return true;
    }

    $.Ess.Utilities.isDateGreaterThanOrEqual = function (paramDate1, paramDate2, isAlertRequired, alertMessage, controlName) {

        if (paramDate1 != "" && paramDate2 != "") {

            if (fnGetDatesForProcessing(paramDate1, paramDate2)) {
                if (parseInt(arrDate1[2] + arrDate1[1] + arrDate1[0]) >= parseInt(arrDate2[2] + arrDate2[1] + arrDate2[0])) {
                    return true;
                }
                else {
                    isAlertRequired = isAlertRequired || false;
                    alertMessage = alertMessage || "Date is not greater";
                    controlName = controlName || "";
                    if (isAlertRequired) {
                        alert(alertMessage);
                    }
                }
            }
            return false;
        }
        return true;
    }

    $.Ess.Utilities.isDateValid = function (paramDate, isAlertRequired, alertMessage, controlName) {

        if (paramDate != "") {

            var RegExPattern = /^(((0?[1-9]|[12]\d|3[01])\/(0?[13578]|1[02])\/((1[6-9]|[2-9]\d)\d{2}))|((0?[1-9]|[12]\d|30)\/(0?[13456789]|1[012])\/((1[6-9]|[2-9]\d)\d{2}))|((0?[1-9]|1\d|2[0-8])\/0?2\/((1[6-9]|[2-9]\d)\d{2}))|(29\/0?2\/((1[6-9]|[2-9]\d)(0?[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
            if (paramDate.match(RegExPattern)) {
                return true;
            }
            else {
                isAlertRequired = isAlertRequired || false;
                alertMessage = alertMessage || "Enter a valid Date";
                controlName = controlName || "";

                if (isAlertRequired) {
                    alert(alertMessage);
                }
                return false;
            }
        }
        return true;
    }

    function fnGetDatesForProcessing(paramDate1, paramDate2, paramDate3) {

        paramDate3 = paramDate3 || "";

        $.each(arrDefinedSeparators, function (key, value) {
            fromDateSeperator = paramDate1.indexOf(value);
            if (fromDateSeperator > -1) {
                fromDateSeperator = value;
                return false;
            }
        });
        arrDate1 = paramDate1.split(fromDateSeperator);
        arrDate2 = paramDate2.split(fromDateSeperator);

        if (arrDate1.length == 3) {
            arrDate1[0] = arrDate1[0].length == 1 ? "0" + arrDate1[0] : arrDate1[0];
            arrDate1[1] = arrDate1[1].length == 1 ? "0" + arrDate1[1] : arrDate1[1];

            if (arrDate2.length == 3) {
                arrDate2[0] = arrDate2[0].length == 1 ? "0" + arrDate2[0] : arrDate2[0];
                arrDate2[1] = arrDate2[1].length == 1 ? "0" + arrDate2[1] : arrDate2[1];

                if (paramDate3 != "") {
                    arrDate3 = paramDate3.split(fromDateSeperator);
                    if (arrDate3.length == 3) {
                        arrDate3[0] = arrDate3[0].length == 1 ? "0" + arrDate3[0] : arrDate3[0];
                        arrDate3[1] = arrDate3[1].length == 1 ? "0" + arrDate3[1] : arrDate3[1];
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    $.Ess.Utilities.convertToDateFormat = function convertToDateFormat(validDate, dateFormat) {
        var VTDate = new Array;
        var validToyear;
        var validTomonth;
        var validToday;        
        if (dateFormat == 'dd/mm/yy') {
            return validDate;
        }
        else if (dateFormat == 'mm/dd/yy') {
            validDate = VTDate[1] + "/" + VTDate[0] + "/" + VTDate[2];
        }
        else if (dateFormat == 'dd-M-yy') {
            var toMonth;
            VTDate = validDate.split("-");
            toMonth = getMonth(VTDate[1]);
            validDate = VTDate[0] + "/" + toMonth + "/" + VTDate[2];
        }
        else if (dateFormat == 'dd-MMM-yyyy') {
            var months = new Array(12);
            months[0] = "Jan";
            months[1] = "Feb";
            months[2] = "Mar";
            months[3] = "Apr";
            months[4] = "May";
            months[5] = "Jun";
            months[6] = "Jul";
            months[7] = "Aug";
            months[8] = "Sep";
            months[9] = "Oct";
            months[10] = "Nov";
            months[11] = "Dec";

            var date = validDate;
            var month_value = date.getMonth();
            var validDate = date.getDate() + "-" + months[month_value] + "-" + date.getFullYear();
        }
        return validDate
    }

    $.Ess.Utilities.initializeDatePicker = function (paramCntrls, isDisabled, isSetSysDate) {
        $(paramCntrls).datepicker('destroy');
        options = {
            dateFormat: 'dd/mm/yy',
            //showOn: "button",
            buttonImage: "../../Images/calendar.gif",
            buttonImageOnly: false,
            buttonText: 'Select Date',
            changeYear: true,
            changeMonth: true,
            yearRange: "-90:+10",
            gotoCurrent: true,
            disabled: isDisabled

        };
        $(paramCntrls).datepicker(options);
        if (isSetSysDate) {
            $(paramCntrls).val($.datepicker.formatDate('dd/mm/yy', new Date()));
            $(paramCntrls).datepicker({ minDate: -1, maxDate: -2 }).attr('readonly', 'readonly');
        }
        else $(paramCntrls).val('');
        if (isDisabled)
            $(paramCntrls).attr('disabled', true);
        else $(paramCntrls).attr('disabled', false);
    }
    //#end region

    //region Set Time
    $.Ess.Utilities.initializeTime = function (paramHourCntrls, paramMintueCntrls, paramBtnCntrls, isDisabled) {
        var now = new Date();
        var hour = now.getHours();
        var minutes = now.getMinutes();
        if (hour > 12) {
            hour = hour - 12;
            $(paramBtnCntrls).val("PM");
        }
        else if (hour == 12) {
            $(paramBtnCntrls).val("PM");
        }
        else if (hour == 0) {
            hour = 12;
            $(paramBtnCntrls).val("AM");
        }
        else {
            $(paramBtnCntrls).val("AM");
        }
        if (hour < 10)
            hour = "0" + hour; // prefix with '0' if hour is single digit
        if (minutes < 10)
            minutes = "0" + minutes; // prefix with '0' if minute is single digit
        $(paramHourCntrls).val(hour);  //Hour
        $(paramMintueCntrls).val(minutes); //Minute
        if (isDisabled) {
            $(paramHourCntrls).attr('disabled', true);
            $(paramMintueCntrls).attr('disabled', true);
            $(paramBtnCntrls).attr('disabled', true);
        }
        else {
            $(paramHourCntrls).attr('disabled', false);
            $(paramMintueCntrls).attr('disabled', false);
            $(paramBtnCntrls).attr('disabled', false);
        }
    }
    //#end time

    //#region Get Query String Value
    $.Ess.Utilities.SetQueryStringValues = function (param) {
        return encodeURIComponent(param);
    }

    $.Ess.Utilities.GetQueryStringValues = function (isEncrypted) {

        isEncrypted = isEncrypted || false;

        var qryString = location.search.replace('?', '');
        if (qryString[0] != '') {

            if (isEncrypted) {
                qryString = decodeURIComponent(qryString, "20");
            }

            var objQueryString = [], queryStringItem;
            if (qryString != undefined && qryString != "") {
                qryString = qryString.split('&');
                for (var i = 0; i < qryString.length; i++) {
                    queryStringItem = qryString[i].split('=');
                    objQueryString[queryStringItem[0]] = queryStringItem[1];
                }
            }
            return objQueryString;
        }
    }
    //#end region

    // #region Validation

    $('.alphaonly').bind('keyup blur', function () {
        $(this).val($(this).val().replace(/[^A-Za-z]/g, ''));
    });

    $('.numeric').bind('keyup blur', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    $('.alphanumeric').bind('keyup blur', function () {
        $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ''));
    });

    $('.alphanumericwithspchar').bind('keyup blur', function () {
        $(this).val($(this).val().replace(/[^a-zA-Z0-9,.@]/g, ''));
    });

    $.Ess.Utilities.OnlyAlphabets = function onlyAlphabets(e, t) {
        try {
            if (window.event) {
                var charCode = window.event.keyCode;
            }
            else if (e) {
                var charCode = e.which;
            }
            else { return true; }
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
                return true;
            else
                return false;
        }
        catch (err) {
            alert(err.Description);
        }
    }

    /* Number with Three Decimal Points*/
    $.Ess.Utilities.OnlyNumberWithThreeDecimal = function (e, t) {
        var $this = t;
        var event = e;
        if ((event.which != 46 || $this.val().indexOf('.') != -1) &&
       ((event.which < 48 || event.which > 57) &&
       (event.which != 0 && event.which != 8))) {
            event.preventDefault();
        }
        var text = $this.val();
        if ((event.which == 46) && (text.indexOf('.') == -1)) {
            setTimeout(function () {
                if ($this.val().substring($this.val().indexOf('.')).length > 4) {
                    $this.val($this.val().substring(0, $this.val().indexOf('.') + 4));
                }
            }, 1);
        }

        if ((text.indexOf('.') != -1) &&
        (text.substring(text.indexOf('.')).length > 3) &&
        (event.which != 0 && event.which != 8) &&
        ($($this)[0].selectionStart >= text.length - 3)) {
            event.preventDefault();
        }
    }

    /* Number with Two Decimal Points*/
    $.Ess.Utilities.OnlyNumberWithTwoDecimal = function (e, t) {
        var $this = t;
        var event = e;
        if ((event.which != 46 || $this.val().indexOf('.') != -1) &&
       ((event.which < 48 || event.which > 57) &&
       (event.which != 0 && event.which != 8))) {
            event.preventDefault();
        }

        var text = $($this).val();
        if ((event.which == 46) && (text.indexOf('.') == -1)) {
            setTimeout(function () {
                if ($this.val().substring($this.val().indexOf('.')).length > 3) {
                    $this.val($this.val().substring(0, $this.val().indexOf('.') + 3));
                }
            }, 1);
        }

        if ((text.indexOf('.') != -1) &&
        (text.substring(text.indexOf('.')).length > 2) &&
        (event.which != 0 && event.which != 8) &&
        ($($this)[0].selectionStart >= text.length - 2)) {
            event.preventDefault();
        }
    }

    $.strWithDotRegExPattern = function (param) {
        return param.replace(/[^a-zA-Z 0-9]+/g, '')
    }

    $.strWithDotSlashCommaHyphenRegExPattern = function (param) {
        return param.replace(/[^a-zA-Z0-9 @,\/.-]/g, '')
    }

    //#endregion Validation

     $(".allownumericwithdecimal").on("keypress keyup blur", function (event) {
         //this.value = this.value.replace(/[^0-9\.]/g,'');
         $(this).val($(this).val().replace(/[^0-9\.]./g, ''));
         if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
             event.preventDefault();
         }
     });

    $(".allownumericwithoutdecimal").on("keypress keyup blur", function (event) {
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });



})(jQuery);