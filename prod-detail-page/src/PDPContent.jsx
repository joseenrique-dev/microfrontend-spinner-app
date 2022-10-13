import React, { useState, useEffect, useRef } from "react";

export default function PDPContent() {
  const product = 1; 

  return (
    <div className="grid grid-cols-2 gap-5">
     Product { product }
    </div>
  );
}