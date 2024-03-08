// App.js
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Supers from "./Components/Supers";

const supabase = createClient(
  /// supabase url
  "https://_____________________________.supabase.co",
  //// api key of supabase
  "_______________________________________________________________________________________"
);

function App() {
  return (
    <div className="App">
      <Supers supabase={supabase} />
    </div>
  );
}

export default App;
