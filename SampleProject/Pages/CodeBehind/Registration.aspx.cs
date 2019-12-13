using Ess.Utilities;
using Newtonsoft.Json;
using SampleBO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SampleProject.Pages.CodeBehind
{
    public partial class Registration : System.Web.UI.Page
    {
        //#region Save / Update Ledger Head
        //[WebMethod]
        //public static string SaveEmployee(string Name, string Address, string Mobile, string Email, char Gender) 
        //{
        //    int returnValue = -1;
        //    try
        //    {
        //        RegisterBO obj = new RegisterBO();
        //        obj.Name = Name;
        //        obj.Address = Address;
        //        obj.Mobile = Mobile;
        //        obj.Email = Email;
        //        obj.Gender = Gender;
        //        RegisterDBUtility robj = new RegisterDBUtility(obj);
        //        int result = robj.SaveEditLedgerHead().RetrievableInt;
        //        if (result == 1)
        //        {
        //            returnValue = result;
        //            var returnResult = new Dictionary<string, object>
        //            {
        //                 { "Response",returnValue }
        //            };
        //            return JsonConvert.SerializeObject(returnResult);
        //        }
        //        if (result == 0)
        //        {
        //            returnValue = result;
        //            var returnResult = new Dictionary<string, object>
        //            {
        //                 { "Response",returnValue }
        //            };
        //            return JsonConvert.SerializeObject(returnResult);
        //        }

        //    }
        //    catch (Exception ex)
        //    {
        //        ErrorLogging.WriteError(ex);
        //    }
        //    var returnErrorResult = new Dictionary<string, object>
        //            {
        //                 { "Response",returnValue }
        //            };
        //    return JsonConvert.SerializeObject(returnErrorResult);
        //}
        //#endregion
    }
}