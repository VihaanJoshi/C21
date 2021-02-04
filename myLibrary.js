
  function touchcheck(a,b)
  {
    if (a.x - b.x < b.width/2 + a.width/2
      && b.x - a.x < b.width/2 + a.width/2
      &&a.y - b.y < b.height/2 +a.height/2
      && b.y - a.y < b.height/2 + a.height/2) {
    return true;
  }
  else {
    return false;
  }
}


 function boff(a,b)
 {
 if (a.x - b.x < b.width/2 + a.width/2
  && b.x - a.x < b.width/2 + a.width/2)
  {
      a.velocityX=-1*(a.velocityX);
  }
  else if (a.y - b.y < b.height/2 +a.height/2
    && b.y - a.y < b.height/2 + a.height/2)
    {
      a.velocityY=-1*(a.velocityY);
    }
}