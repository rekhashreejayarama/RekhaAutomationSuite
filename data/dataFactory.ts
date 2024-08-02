
import { Form } from "../models/form";
import { User } from "../models/user";

export class DataFactory {
  public static getUserDetails(): User {
      return {
        firstName: "Alden",
        lastName: "Cantrell",
        email:"test@test.com",
        age: "30",
        salary: "12345",
        department:"QA"
      };
    }

    public static getFormData(): Form {
      return {
        firstName: "Gerimedica",
        lastName: "BV",
        email: "test@test.com",
        mobileNmbr: "0123456789",
        dob:"15 Jan 1990",
        subject: "Playwright Assignment",
        currentAddress: "Netherlands"

      };
  }
}


