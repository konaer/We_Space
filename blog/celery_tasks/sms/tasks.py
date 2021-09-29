import logging
from django.conf import settings
from django.core.mail import send_mail
from celery_tasks.main import app

logger = logging.getLogger('django')

@app.task
def celery_send_email(sms_code, mobile):
    """
    发送验证邮箱邮件
    :param to_email: 收件人邮箱
    :param verify_url: 验证链接
    :return: None
    """
    subject = "We Space SMS verification code"
    message = f'Welcome to We Space! \n Your SMS verification code is {sms_code}.'

    try:
        send_mail(subject, message, settings.EMAIL_FROM, [mobile])
    except Exception as e:
        logger.error(e)