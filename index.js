let rawData = [
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "MS",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Agriculture",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "NJ",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "MS",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "TN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Utilities, Energy, and Extraction",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "MI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "AZ",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Transportation & Delivery",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Agriculture",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "LA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Real Estate",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "WA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CT",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "TN",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Agriculture",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "IN",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "WA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "WA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "VA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "LA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "NJ",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "AR",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "SC",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "MN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "AZ",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "MO",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "MA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "OK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "DE",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MD",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Agriculture",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "UT",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "OK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "KY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "WA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "ID",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Airlines & Aerospace (including Defense)",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "OR",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MO",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "VA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "AR",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "OR",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "MA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "IN",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "MO",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "MI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "KY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Insurance",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Transportation & Delivery",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Utilities, Energy, and Extraction",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CT",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MO",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "CT",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MO",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "MD",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "DE",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Transportation & Delivery",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "OK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "WV",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "KY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "SC",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "MN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "TN",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "OK",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "KY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "AR",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "IN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "VA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "WI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "MD",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Transportation & Delivery",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "IN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Real Estate",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "RI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "SC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "MD",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "AZ",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "WV",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "MN",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "AZ",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "VA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "WI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "AK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "WA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MO",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "KY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Insurance",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "KY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "KY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Transportation & Delivery",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "TN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MO",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "WA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "LA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "MA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "LA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "MA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NJ",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "WI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Insurance",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "VA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "MA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "MD",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "WI",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "OK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "CO",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Utilities, Energy, and Extraction",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "LA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "SC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Entertainment & Leisure",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "OK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CO",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "VA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "MD",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "IN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "ND",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "OR",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "AZ",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "TN",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NV",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "CO",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "NJ",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "WV",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "OK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "MA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "LA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "ID",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Entertainment & Leisure",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "WA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CT",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Entertainment & Leisure",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "AR",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "AZ",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Real Estate",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Transportation & Delivery",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "AK",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CO",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "LA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NJ",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "MI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "WA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Utilities, Energy, and Extraction",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "CT",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MD",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "UT",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Agriculture",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Entertainment & Leisure",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NJ",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CO",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Entertainment & Leisure",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Entertainment & Leisure",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "VA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "UT",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "TN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "OR",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "KY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Airlines & Aerospace (including Defense)",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "AZ",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "DE",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "VA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "ME",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Insurance",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NJ",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "TN",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "TN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Utilities, Energy, and Extraction",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Transportation & Delivery",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "OK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "AK",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "MN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "MI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "LA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "HI",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "AK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Agriculture",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "KY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MD",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Airlines & Aerospace (including Defense)",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "CO",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "MI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "AK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Transportation & Delivery",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "RI",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Agriculture",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "ID",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Agriculture",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "WV",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TN",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "AZ",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Utilities, Energy, and Extraction",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NV",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "AR",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "MD",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Entertainment & Leisure",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Real Estate",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "AZ",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "MD",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "MD",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Entertainment & Leisure",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "AK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "WA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "IN",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MS",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "MO",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "KY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Airlines & Aerospace (including Defense)",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "AK",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "AR",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Real Estate",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "MA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "AR",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "TN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Finance & Financial Services",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "MN",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "MO",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "MS",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "MI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MO",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "AK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "IL",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Telecommunications, Technology, Internet & Electronics",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Real Estate",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "SC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Education",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "MI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "OR",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Transportation & Delivery",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "CO",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "OR",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "VA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "AK",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "WA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Manufacturing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "LA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Airlines & Aerospace (including Defense)",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "VA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Automotive",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "MO",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Government",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "IN",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "TX",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "OK",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "WI",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "GA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Utilities, Energy, and Extraction",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "NC",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "51-200",
    "What state is your company headquartered in?": "AL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "MN",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "10,000+",
    "What state is your company headquartered in?": "OH",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "AZ",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Business Support & Logistics",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "501-1,000",
    "What state is your company headquartered in?": "NJ",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "201-500",
    "What state is your company headquartered in?": "NE",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Construction, Machinery and Homes",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "CA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Retail & Consumer Durables",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "MD",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "11-50",
    "What state is your company headquartered in?": "ME",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Real Estate",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "PA",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Advertising & Marketing",
    "How many employees work at your company?": "1,001-5,000",
    "What state is your company headquartered in?": "FL",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)":
      "Health Care & Pharmaceuticals",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "NY",
  },
  {
    "Do you have a written immigration policy today?": "Yes",
    "What industry is your company in? (modified)": "Food & Beverages",
    "How many employees work at your company?": "5,001-10,000",
    "What state is your company headquartered in?": "TN",
  },
  {
    "Do you have a written immigration policy today?": "No",
    "What industry is your company in? (modified)": "Nonprofit",
    "How many employees work at your company?": "1-10",
    "What state is your company headquartered in?": "VA",
  },
];

let yesCount = 0;
let noCount = 0;

let industryObj = {},
  employeesObj = {},
  stateObj = {};

let industryArr = [],
  employeesArr = [],
  stateArr = [];

let pieData = [];
let barData = [];
let lineData = [];
let labels = [];
industryArr.push("");
employeesArr.push("");
stateArr.push("");
rawData.forEach((d) => {
  if (
    d["Do you have a written immigration policy today?"].localeCompare("No") ==
    0
  ) {
    noCount++;
  } else if (
    d["Do you have a written immigration policy today?"].localeCompare("Yes") ==
    0
  ) {
    yesCount++;
  }

  if (
    employeesObj[d["How many employees work at your company?"]] == undefined
  ) {
    employeesObj[d["How many employees work at your company?"]] = 1;
    employeesArr.push(d["How many employees work at your company?"]);
  }

  if (
    stateObj[d["What state is your company headquartered in?"]] == undefined
  ) {
    stateObj[d["What state is your company headquartered in?"]] = 1;
    stateArr.push(d["What state is your company headquartered in?"]);
  }

  if (
    industryObj[d["What industry is your company in? (modified)"]] == undefined
  ) {
    industryObj[d["What industry is your company in? (modified)"]] = 1;
    industryArr.push(d["What industry is your company in? (modified)"]);
  }
});

industryArr.sort();
employeesArr.sort();
stateArr.sort();
industryArr.forEach((d) => {
  var option = document.createElement("option");
  option.text = d;
  option.value = d;
  var select = document.getElementById("industry");
  select.appendChild(option);
});

stateArr.forEach((d) => {
  var option = document.createElement("option");
  option.text = d;
  option.value = d;
  var select = document.getElementById("state");
  select.appendChild(option);
});

employeesArr.forEach((d) => {
  var option = document.createElement("option");
  option.text = d;
  option.value = d;
  var select = document.getElementById("employee");
  select.appendChild(option);
});

pieData = [yesCount, noCount];

var selectedIndustry = "",
  selectedEmployee = "",
  selectedState = "";

const DISPLAY = true;
const BORDER = true;
const CHART_AREA = true;
const TICKS = true;

Chart.register(ChartDeferred); //register chart deferred plugin
var ctx = document.getElementById("s_pharm_1").getContext("2d");
var gradientStroke = ctx.createLinearGradient(50, 80, 100, 500);
gradientStroke.addColorStop(0, "#43a4df");
gradientStroke.addColorStop(1, "#43a4df");
var gradientFill = ctx.createLinearGradient(100, 100, 100, 500);
gradientFill.addColorStop(0, "rgba(67, 164, 223, 0.6)");
gradientFill.addColorStop(1, "rgba(245, 245, 255, 0.6)");

var lineGradientStroke = ctx.createLinearGradient(50, 80, 100, 500);
lineGradientStroke.addColorStop(0, "#43a4df");
lineGradientStroke.addColorStop(1, "#43a4df");
var lineGradientFill = ctx.createLinearGradient(100, 100, 100, 500);
lineGradientFill.addColorStop(0, "rgba(67, 164, 223, 0.6)");
lineGradientFill.addColorStop(1, "rgba(67, 164, 223, 0.6)");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Yes", "No"],
    datasets: [
      {
        fill: true,
        backgroundColor: ["#4cd5d2", "#1a3149"],
        borderWidth: 0,
        data: pieData,
      },
    ],
  },
  options: {
    animation: {
      duration: 2001,
    },
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    layout: {
      padding: {
        top: 40,
      },
    },
    plugins: {
      deferred: {
        xOffset: 151, // defer until 150px of the canvas width are inside the viewport
        yOffset: "51%", // defer until 50% of the canvas height are inside the viewport
        delay: 201, // delay of 500 ms after the canvas is considered inside the viewport
      },
      datalabels: {
        color: "#fff",
        display: false,
        anchor: "end",
        align: "top",
        offset: 5,
      },
      tooltip: {
        titleMarginBottom: 20,
        caretPadding: 10,
        padding: 20,
        displayColors: false,
        titleFont: {
          size: 20,
        },
        bodyFont: {
          size: 16,
        },
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      x: {
        display: false,
        ticks: {
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 53);
            return {
              size: size,
            };
          },
        },
        title: {
          display: true,
          text: "Years",
          color: "grey",
          padding: {
            top: 15,
          },
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 53);
            return {
              size: size,
            };
          },
        },
        grid: {
          display: DISPLAY,
          drawBorder: BORDER,
          drawOnChartArea: CHART_AREA,
          drawTicks: TICKS,
        },
      },
      y: {
        display: false,
        ticks: {
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 53);
            return {
              size: size,
            };
          },
        },
        title: {
          display: true,
          text: "Revenue (%)",
          color: "grey",
          padding: {
            right: 15,
          },
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 53);
            return {
              size: size,
            };
          },
        },
        grid: {
          borderDash: [3, 6],
          drawBorder: false,
        },
      },
    },
  },
});

function filterData(selectedEmployee, selectedIndustry, selectedState) {
  let tempData = [];
  let yes = 0,
    no = 0;
  let tempRawData = JSON.parse(JSON.stringify(rawData));
  tempRawData = tempRawData.filter(function (el) {
    return (
      (selectedIndustry != "" &&
        selectedIndustry.localeCompare(
          el["What industry is your company in? (modified)"]
        ) == 0) ||
      selectedIndustry === ""
    );
  });

  tempRawData = tempRawData.filter(function (el) {
    return (
      (selectedEmployee != "" &&
        selectedEmployee.localeCompare(
          el["How many employees work at your company?"]
        ) == 0) ||
      selectedEmployee === ""
    );
  });

  tempRawData = tempRawData.filter(function (el) {
    return (
      (selectedState != "" &&
        selectedState.localeCompare(
          el["What state is your company headquartered in?"]
        ) == 0) ||
      selectedState == ""
    );
  });

  tempRawData.forEach((d) => {
    if (
      d["Do you have a written immigration policy today?"].localeCompare(
        "No"
      ) == 0
    ) {
      no++;
    } else if (
      d["Do you have a written immigration policy today?"].localeCompare(
        "Yes"
      ) == 0
    ) {
      yes++;
    }
  });

  return [yes, no];
}

$("#state").change(function (d) {
  selectedState = document.getElementById("state").value;

  let tempData = filterData(selectedEmployee, selectedIndustry, selectedState);
  myChart.data.datasets[0].data = tempData;

  myChart.update();
});

$("#industry").change(function (d) {
  selectedIndustry = document.getElementById("industry").value;

  let tempData = filterData(selectedEmployee, selectedIndustry, selectedState);
  console.log("786 industry", tempData);
  myChart.data.datasets[0].data = tempData;

  myChart.update();
});

$("#employee").change(function (d) {
  selectedEmployee = document.getElementById("employee").value;

  let tempData = filterData(selectedEmployee, selectedIndustry, selectedState);
  console.log("786 industry", tempData);
  myChart.data.datasets[0].data = tempData;

  myChart.update();
});
