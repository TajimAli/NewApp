import React from 'react';
import UserForm from './UserForm';

const Appkk = () => {
    return (
        <div>
            <h1>User Management</h1>
            <UserForm />
        </div>
    );
};

export default Appkk;


create a task create Five Form page, countryFrom, stateFrom, districtFrom, cityFrom and FullAddressForm and form data is in countryFrom countryName and countryCode, in stateForm  stateName , in DistrictForm District Name And In citryForm is CityName, the condition is when user Enter Countryname and CountryCode on country Form and click on Submit button so that form data should be store on Country table and on table should be edit and Delete functionality when user click on edit button so all data should be go on form for edit, and in state form when user enter state so before it user should be select country from on same state from and that country should be show in drop down then then enter state name and click on submit button after submit all data should be go on state table and there also should be functionality edit and delete  next step is when user click on districtform so in districtform first user select country in drop down then select state in drop down and from that country and state should be show then user enter  district name and click on submit button so all data should be store on district table and in district table also should be edit and delete functionality then in next step when user click on cityForm so first user select country in drop Down then select state of that country states should be show in drop down then select district  of that states district should be show in drop down then enter city and click on submit button after click on submit button all data should be show on city table and in next step when user click on full address form then first user select country in drop down then select state of that country states should be show in drop down then select districts  of that states district should be show in drop down then select citys of that district then click on submit form and after submit all data should be store on fullAddress table and on  date table should be edit and delete functionality  and the condition is if user select state without select country so user can not be select condition is first user select countrys then states then districts then citys , create this task frontend is in reactjs and backend is in .net core 6 and the  database is sql server create is completely and all functionality should be work 