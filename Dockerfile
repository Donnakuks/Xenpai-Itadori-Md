FROM quay.io/Donnakuks/md:beta
RUN git clone https://github.com/Donnakuks/Xenpai-Itadori-Md.git /root/XENPAI/
WORKDIR /root/LyFE/
RUN yarn install
CMD ["npm", "start"]
