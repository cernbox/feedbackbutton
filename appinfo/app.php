<?php

namespace OCA\FeedbackButton\AppInfo;

use OCP\AppFramework\App;

$app = new App('feedbackbutton');

\OCP\Util::addScript('feedbackbutton', 'app');
\OCP\Util::addStyle('feedbackbutton', 'style');
