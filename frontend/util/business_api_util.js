export const fetchAllBusinesses = () => (
  $.ajax({
    method: 'GET',
    url: '/api/businesses'
  })
);

export const createBusiness = business => (
  $.ajax({
    method: 'POST',
    url: '/api/businesses',
    data: { business }
  })
);


export const fetchBusiness = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${id}`
  })
);

export const editBusiness = business => (
  $.ajax({
    method: 'PATCH',
    url: `/api/businesses/${business.id}`,
    data: { business }
  })
);

export const deleteBusiness = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/businesses/${id}`
  })
);