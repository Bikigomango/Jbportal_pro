// App.js
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Supers from "./Components/Supers";

const supabase = createClient(
  "https://axecuodyqkzojnxmhcvy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4ZWN1b2R5cWt6b2pueG1oY3Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNjAwNjMsImV4cCI6MjAyNDgzNjA2M30.d685EZYleyYOVv7y4Ts7LbQW64im8F0f9rVhSBRM4Dk"
);

function App() {
  return (
    <div className="App">
      <Supers supabase={supabase} />
    </div>
  );
}

export default App;
