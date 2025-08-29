## get image
FROM mcr.microsoft.com/playwright:v1.54.2-jammy

## set workdir inside docker container
WORKDIR /playwright-test

## container copy and install modules 
COPY package*.json ./
RUN npm install

## Cache npm dependencies
# COPY package*.json ./
# RUN --mount=type=cache,target=/root/.npm \
#     npm install

## run
CMD ["npx", "playwright", "test"]
