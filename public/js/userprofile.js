async function deleteMed(medId) {
    const response = await fetch('/api/medication/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({med_id: medId})
      });
    
      if (response.ok) {
        alert('med deleted')
        location.reload()
      } else {
        alert(response.statusText);
      }
}

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);