import axios from "axios"
const lkmlkamblknAPI = axios.create({
  baseURL: "https://lkmlkamblkn-12.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return lkmlkamblknAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return lkmlkamblknAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return lkmlkamblknAPI.post(`/api/v1/signup/`, payload)
}
function modules_zoominfo_auth_token_create(payload) {
  return lkmlkamblknAPI.post(`/modules/zoominfo/auth/token/`)
}
function modules_zoominfo_data_bulk_create(payload) {
  return lkmlkamblknAPI.post(`/modules/zoominfo/data/bulk/`)
}
function modules_zoominfo_data_enrich_create(payload) {
  return lkmlkamblknAPI.post(`/modules/zoominfo/data/enrich/`)
}
function modules_zoominfo_data_search_create(payload) {
  return lkmlkamblknAPI.post(`/modules/zoominfo/data/search/`)
}
function rest_auth_login_create(payload) {
  return lkmlkamblknAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return lkmlkamblknAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return lkmlkamblknAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return lkmlkamblknAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return lkmlkamblknAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return lkmlkamblknAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return lkmlkamblknAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return lkmlkamblknAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return lkmlkamblknAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return lkmlkamblknAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return lkmlkamblknAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_zoominfo_auth_token_create,
  modules_zoominfo_data_bulk_create,
  modules_zoominfo_data_enrich_create,
  modules_zoominfo_data_search_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
