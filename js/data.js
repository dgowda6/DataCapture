(function () {
    var app = angular.module('data',[]);
    
    var reasonIndex = null;
    var reasonInput = null;
    var reasonRequired = false;
    var timeSheet = {
        "shift" : [
            {"shiftName" : "Shift 1"},
            {"shiftName" : "Shift 2"}
        ],
        "lineNumber" : [
            {"lineName" : "LMN0089"},
            {"lineName" : "LMN0056"}
        ],
        "tableLog" : [
            {
                "shiftTime" : "5:15-6:15",
                "shedProd" : 350,
                "actuProd" : "",
                "cummProd" : "",
                "reason" : ""
            },
            {
                "shiftTime" : "6:15-7:30",
                "shedProd" : 456,
                "actuProd" : "",
                "cummProd" : "",
                "reason" : ""
            },
            {
                "shiftTime" : "7:50-9:00",
                "shedProd" : 395,
                "actuProd" : "",
                "cummProd" : "",
                "reason" : ""
            },
            {
                "shiftTime" : "9:00-10:00",
                "shedProd" : 365,
                "actuProd" : "",
                "cummProd" : "",
                "reason" : ""
            },
            {
                "shiftTime" : "10:10-11:10",
                "shedProd" : 365,
                "actuProd" : "",
                "cummProd" : "",
                "reason" : ""
            },
            {
                "shiftTime" : "11:10-12:00",
                "shedProd" : 304,
                "actuProd" : "",
                "cummProd" : "",
                "reason" : ""
            },
            {
                "shiftTime" : "12:00-1:30",
                "shedProd" : 365,
                "actuProd" : "",
                "cummProd" : "",
                "reason" : ""
            },
            {
                "shiftTime" : "1:30-2:15",
                "shedProd" : 247,
                "actuProd" : "",
                "cummProd" : "",
                "reason" : ""
            }
        ],
        "reasons" : [
            {"reasonName" : "No Material"},
            {"reasonName" : "Machine Breakdown"}
        ],
        
        "selectedReason" : null,
        "selectedShift" : null,
        "selectedLineNumber" : null
    };
        
    app.controller('DataController', ['$scope', function ($scope){
        this.data = timeSheet;
        
        this.checkProd = function(prod, element, index){
            if(!isNaN(parseInt(prod.actuProd))){
                if(prod.actuProd < prod.shedProd){
                    reasonIndex = index;
                    reasonInput = element.target;
                    reasonRequired = true;
                    $('#reasonModal').modal('show'); 
                }
            }
        };
        
        this.makeOldFocus = function(){
            reasonInput.focus();
        }
        
        this.setReason = function(){
            this.data.tableLog[reasonIndex].reason = this.data.selectedReason.reasonName;
            $('#reasonModal').modal('hide');
            reasonRequired = false;
        }
        
        
    }]);
    
    $('#reasonModal').on('hidden.bs.modal', function () {
        if(reasonRequired){
            reasonInput.focus();
        }
    });
    
    
})();
