export class IntroType {
    introTypeAnnotation(){
        //const = constant value
        const constantAny: any = "hello"; // --> variable declaration
        
        /*
            Data type in ts : number, string, boolean 
        */
       const numberValue: number = 20;
       const numberValue1 = 20;

       const stringValue: string = "value";
       const stringValue1 = "value";

       const booleanValue: boolean = true;
       const booleanValue1 = false; 

       alert(this.nilaiFungsiIni());
       
    }

    tidakPunyaReturn(): void{

    }

    nilaiFungsiIni(): number{
        return 10;
    }
}
