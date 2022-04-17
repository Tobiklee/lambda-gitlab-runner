# Use basic nodejs lambda image
FROM public.ecr.aws/lambda/nodejs:14

# Copy lambda code
COPY lambda/index.js  ${LAMBDA_TASK_ROOT}

# Install gitlaber runner
RUN yum clean all && \
    yum install -y wget && \
    wget -O /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64 && \
    chmod +x /usr/local/bin/gitlab-runner

CMD [ "index.handler" ]

