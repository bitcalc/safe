  function testcase() 
  {
    var desc = Object.getOwnPropertyDescriptor(Object, "seal");
    if (desc.value === Object.seal && desc.writable === true && desc.enumerable === false && desc.configurable === true)
    {
      return true;
    }
  }
  {
    var __result1 = testcase();
    var __expect1 = true;
  }
  