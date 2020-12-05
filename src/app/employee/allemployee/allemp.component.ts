import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
    selector:"emp",
    templateUrl:"./allemp.component.html",
    styleUrls:["./allemp.component.css"]
})

export class EmployeeComponent{
    empForm!:FormGroup;
    fnameLength:number=0;

        validationMessages={
            "fullname":{
                "required":"FullName is required",
                "minlength":"fullName must have minimum 2 characters",
                "maxlength":"fullName must have less than 10 characters"
            },
            "email":{
                "required":"email is required"
            },
            "skillName":{
                "required":"skillName is required"
            },
            "expInYr":{
                "required":"Experience in year is required"
            },
            "proficiency":{
                "required":"proficiency is required"
            },

        };

        formErrors={
            'fullname':'',
            'email':'',
            'skillname':'',
            'expInYr':'',
            'proficiency':''
        };

    constructor(private fb:FormBuilder){}
//using FormGroup and FormControl
   /* ngOnInit():void{
        this.empForm=new FormGroup({
            fullname:new FormControl(),
            email :new FormControl(),
            skills: new FormGroup({
                skillName: new FormControl(),
                expInYr:new FormControl(),
                proficiency:new FormControl()
            })
        });

    }*/

    ngOnInit():void{
        this.empForm=this.fb.group({
            fullname:['',[Validators.required,Validators.maxLength(10),Validators.minLength(2)]],
            email:['',Validators.required],
            skills:this.fb.group({
                skillName:['',Validators.required],
                expInYr:['',Validators.required],
                proficiency:['beginner',Validators.required]
            })
        });

        /*this.empForm.get('fullname')?.valueChanges.subscribe((value:string)=>{
            this.fnameLength=value.length;
        })

        this.empForm.valueChanges.subscribe((value:any)=>{
            console.log(JSON.stringify(value));
        })
        
        this.empForm.get('skills')?.valueChanges.subscribe((value:any)=>{
            console.log(JSON.stringify(value));
        })
        */
    }

    onSubmit():void{
        console.log(this.empForm);
        console.log(this.empForm.get('fullname')?.value);
        console.log(this.empForm.controls.email.value);
       
    }    

   /* onLoadDataClick(){    //to set all form values
        this.empForm.setValue({
            fullname:"Pramila Shinde",
            email:"gaikwadpramila29@gmail.com",
            skills:{
                skillName:"Advance Java",
                expInYr:1,
                proficiency:"beginner"
            }
        })
    }*/

   /* onLoadDataClick(){
        this.empForm.patchValue({   //to set subset of form value
            fullname:"Pramila Shinde",
            email:"gaikwadpramila29@gmail.com",
            /*skills:{
                skillName:"Advance Java",
                expInYr:1,
                proficiency:"beginner"
            }
        })
    }*/

    logValidationErrors(group :FormGroup=this.empForm){
        Object.keys(group.controls).forEach((key :string)=>{
            const abscontrol=group.get(key);
            if(abscontrol instanceof FormGroup){
                this.logValidationErrors(abscontrol);
            }
            else{
                this.formErrors[key]='';
                //abscontrol?.disable();
                if(abscontrol && !abscontrol.valid && (abscontrol.touched || abscontrol.dirty)){
                    const msgs=this.validationMessages[key];
                   for(const erorokey in abscontrol.errors){
                       if(erorokey){
                           this.formErrors[key]+=msgs[erorokey]+' ';
                       }
                   }
                }
            }
        })
    }

    onLoadDataClick(){    //to set all form values
        this.logValidationErrors(this.empForm);
    }

}